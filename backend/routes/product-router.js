const express = require("express");
const router = express.Router();

const createProduct = require("../controllers/ProductController/create-product");
const deleteProduct = require("../controllers/ProductController/delete-product");
const getProduct = require("../controllers/ProductController/get-product");
const editProduct = require("../controllers/ProductController/edit-product");
const getProductList = require("../controllers/ProductController/get-product-list");

router.post("/create-product", createProduct);
router.delete("/delete-product", deleteProduct);
router.get("/", getProduct);
router.get("/all", getProductList);
router.patch("/edit/", editProduct);

module.exports = router;
