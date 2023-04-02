const express = require("express");
const router = express.Router();

const createProduct = require("../controllers/ProductController/create-product");
const deleteProduct = require("../controllers/ProductController/delete-product");
const getProduct = require("../controllers/ProductController/get-product");
const editProduct = require("../controllers/ProductController/edit-product");
const getMyProduct = require("../controllers/ProductController/get-my-product");
const updateQuantity = require("../controllers/ProductController/updateQuantity");
const searchProduct = require("../controllers/ProductController/search-product");
const getAllProduct = require("../controllers/ProductController/get-all-product");
const getFreeProduct = require("../controllers/ProductController/get-free-product");

router.post("/", createProduct);
router.delete("/", deleteProduct);
router.get("/", getProduct);
router.get("/all", getAllProduct);
router.get("/free", getFreeProduct);
router.get("/my-product", getMyProduct);
router.patch("/", editProduct);
router.patch("/edit-quantity/", updateQuantity);
router.get("/search/", searchProduct);

module.exports = router;
