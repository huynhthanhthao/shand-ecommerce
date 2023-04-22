const express = require("express");
const router = express.Router();

const createProduct = require("../controllers/ProductController/create-product");
const deleteProduct = require("../controllers/ProductController/delete-product");
const getProduct = require("../controllers/ProductController/get-product");
const editProduct = require("../controllers/ProductController/edit-product");
const getMyProduct = require("../controllers/ProductController/get-my-product");
const updateQuantity = require("../controllers/ProductController/update-quantity");
const searchProduct = require("../controllers/ProductController/search-product");
const getAllProduct = require("../controllers/ProductController/get-all-product");
const getFreeProduct = require("../controllers/ProductController/get-free-product");
const getProductByCategory = require("../controllers/ProductController/get-product-by-category");
const getProductByOwner = require("../controllers/ProductController/get-product-by-owner");
const searchSameProduct = require("../controllers/ProductController/search-same-product");
const getProductLove = require("../controllers/ProductController/get-product-love");

// Import middleware
const { verifyToken } = require("../middleware/verifyToken.js");
const loveProduct = require("../controllers/ProductController/love-product");
const getProductSuggest = require("../controllers/ProductController/get-product-suggest");

router.post("/", verifyToken, createProduct);
router.delete("/", verifyToken, deleteProduct);
router.get("/", getProduct);
router.get("/all", getAllProduct);
router.get("/free", getFreeProduct);
router.get("/my-product", getMyProduct);
router.patch("/", verifyToken, editProduct);
router.patch("/edit-quantity/", verifyToken, updateQuantity);

router.get("/product-by-category/", getProductByCategory);
router.get("/product-by-owner/", getProductByOwner);

// search product
router.get("/search/", searchProduct);
router.get("/search-same/", searchSameProduct);

// product love
router.get("/love/", verifyToken, getProductLove);
router.patch("/love", verifyToken, loveProduct);

router.get("/product-suggest", getProductSuggest);

module.exports = router;
