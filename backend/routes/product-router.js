const express = require("express");
const router = express.Router();

const createProduct = require("../controllers/ProductController/create-product");
const deleteProduct = require("../controllers/ProductController/delete-product");
const getProduct = require("../controllers/ProductController/get-product");
const editProduct = require("../controllers/ProductController/edit-product");
const getMyProduct = require("../controllers/ProductController/get-my-product");
const updateQuantity = require("../controllers/ProductController/updateQuantity");

router.post("/", createProduct);
router.delete("/", deleteProduct);
router.get("/", getProduct);
router.get("/my-product", getMyProduct);
router.patch("/edit/", editProduct);
router.patch("/edit-quantity/", updateQuantity);

module.exports = router;
