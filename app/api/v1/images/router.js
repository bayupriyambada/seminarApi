const express = require("express");
const router = express();

const { create } = require("./controller")
const upload = require('../../../Validators/Middlewares/multer')


router.post('/images/create', upload.single('images'), create)

module.exports = router;  