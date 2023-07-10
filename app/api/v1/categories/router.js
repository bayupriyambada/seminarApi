const express = require("express");
const router = express();

const { list, create, find, update, destroy } = require("./controller")
router.get("/categories", list);
router.get("/categories/:id", find);
router.put("/categories/:id", update);
router.delete("/categories/:id", destroy);
router.post('/categories/create', create)


module.exports = router;  