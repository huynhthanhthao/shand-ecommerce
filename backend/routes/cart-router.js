const express = require("express");
const router = express.Router();

const addCart = require("../controllers/CartController/add-cart");
const deleteCart = require("../controllers/CartController/delete-cart");
const editCart = require("../controllers/CartController/edit-cart");
const getCart = require("../controllers/CartController/get-cart");

router.get("/", getCart);
router.post("/", addCart);
router.patch("/", editCart);
router.delete("/", deleteCart);

module.exports = router;
