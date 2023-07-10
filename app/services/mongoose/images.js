const Image = require('../../api/v1/images/model')
const { notFound } = require('../../Validators/errors');

// tambahkan function checking Image 

const createImage = async (req) => {
  const result = await Image.create({
    name: req.file ? `uploads/${req.file.filename}` : 'https://dummyimage.com/350x350/000/fff'
  })

  return result;
}

const checkingImage = async (id) => {
  const result = await Image.findOne({ _id: id });
  if (!result) {
    throw new notFound(`Tidak ada gambar dengan id: ${id}`)
  }
  return result
}

module.exports = { createImage, checkingImage }