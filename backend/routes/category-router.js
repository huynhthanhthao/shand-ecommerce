const express = require("express");
const router = express.Router();

const createCategory = require("../controllers/CategoryController/create-category.js");
const deleteCategory = require("../controllers/CategoryController/delete-category.js");
const getCategoryList = require("../controllers/CategoryController/get-category-list.js");
const getCategory = require("../controllers/CategoryController/get-category.js");
const updateCategory = require("../controllers/CategoryController/update-category.js");

// Category router
router.post("/", createCategory);
router.delete("/", deleteCategory);
router.patch("/", updateCategory);
router.get("/detail", getCategory);
router.get("/", getCategoryList);

module.exports = router;
