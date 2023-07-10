const { BadRequest, NotFound } = require('../../Validators/errors');
const Categories = require('../../api/v1/categories/model')

const getAllCategories = async () => {
  const result = await Categories.find()
  return result;
}

const createCategories = async (req) => {
  const { name } = req.body
  const check = await Categories.findOne({ name })
  if (check) throw new BadRequest('Data has been used')
  const result = await Categories.create({ name })
  return result
}

const getOneCategories = async (req) => {
  const { id } = req.params;

  const checkId = await Categories.findOne({ _id: id })
  if (!checkId) throw new NotFound(`Cannot find id: ${id}`)
  return checkId;
}

const updateCategories = async (req) => {
  const { id } = req.params;
  const { name } = req.body

  const check = await Categories.findOne({
    name,
    _id: { $ne: id }
  })

  if (check) throw new BadRequest('This name already exists, cannot be duplicated')

  const result = await Categories.findOneAndUpdate({
    _id: id
  }, {
    name
  }, {
    new: true, runValidators: true
  })

  if (!result) throw new NotFound(`Cannot find id: ${id}`)
  return result
}

const deleteCategories = async (req) => {
  const { id } = req.params;
  const checkId = await Categories.findByIdAndRemove(id)
  if (!checkId) throw new NotFound(`Cannot find id: ${id}`);
  return checkId

}
module.exports = { getAllCategories, createCategories, getOneCategories, updateCategories, deleteCategories }