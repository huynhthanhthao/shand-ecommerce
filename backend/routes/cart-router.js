const express = require("express");
const router = express.Router();

// Import middleware
const { verifyToken } = require("../middleware/verifyToken.js");

const addCart = require("../controllers/CartController/add-cart");
const deleteCart = require("../controllers/CartController/delete-cart");
const editCart = require("../controllers/CartController/edit-cart");
const getCart = require("../controllers/CartController/get-cart");

router.get("/", verifyToken, getCart);
router.post("/", verifyToken, addCart);
router.patch("/", verifyToken, editCart);
router.delete("/", verifyToken, deleteCart);

module.exports = router;
