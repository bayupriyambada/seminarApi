const Image = require('../../api/v1/images/model')

const createImage = async (req) => {
  const result = await Image.create({
    name: req.file ? `uploads/${req.file.filename}` : 'https://dummyimage.com/350x350/000/fff'
  })

  return result;
}

const generateImage = async (req) => {
  const result = `uploads/${req.file.filename}`;
  return result;
}

module.exports = { createImage, generateImage }