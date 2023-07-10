const OK = async (req, res, code = 200, message = null, data) => {
  res.status(code).json({
    code: code,
    message: message,
    data: data
  })
}

module.exports = {
  OK
}