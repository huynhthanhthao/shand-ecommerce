const express = require("express");
const router = express.Router();

const addCart = require("../controllers/CartController/add-cart");
const deleteCart = require("../controllers/CartController/delete-cart");
const editCart = require("../controllers/CartController/edit-cart");
const getCart = require("../controllers/CartController/get-cart");

router.get("/get-cart", getCart);
router.post("/add-cart", addCart);
router.patch("/edit-cart", editCart);
router.delete("/delete-cart", deleteCart);

module.exports = router;
