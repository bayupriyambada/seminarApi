const { getAllCategories, createCategories, getOneCategories, updateCategories, deleteCategories } = require('../../../services/mongoose/categories')
const { StatusCodes } = require('http-status-codes')

const list = async (req, res, next) => {
  try {
    const getList = await getAllCategories()
    res.status(StatusCodes.OK).json({
      message: 'Successfully get list categories',
      data: getList
    })

  } catch (error) {
    next(error)
  }
}

const create = async (req, res, next) => {

  try {
    const result = await createCategories(req)
    res.status(StatusCodes.CREATED).json({
      data: result
    })
  } catch (error) {
    next(error)
  }
}

const find = async (req, res, next) => {
  try {

    const findId = await getOneCategories(req)
    res.status(StatusCodes.OK).json({
      message: 'Successfully find data',
      data: findId
    })
  } catch (error) {
    next(error)
  }
}

const update = async (req, res, next) => {
  try {
    const checkId = await updateCategories(req)
    res.status(StatusCodes.OK).json({
      message: 'Successfully find data',
      data: checkId
    });
  } catch (error) {
    next(error);
  }
}

const destroy = async (req, res, next) => {
  try {
    await deleteCategories(req)
    res.status(StatusCodes.OK).json({
      message: `Successfully delete `,
    });

  } catch (error) {
    next(error)
  }
}
module.exports = { list, create, find, update, destroy }