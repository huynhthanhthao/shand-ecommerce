const express = require("express");
const router = express.Router();

const createCategory = require("../controllers/CategoryController/create-category.js");
const deleteCategory = require("../controllers/CategoryController/delete-category.js");
const getCategoryList = require("../controllers/CategoryController/get-category-list.js");
const getCategory = require("../controllers/CategoryController/get-category.js");
const updateCategory = require("../controllers/CategoryController/update-category.js");

// Import middleware
const { verifyToken } = require("../middleware/verifyToken.js");
const { adminRole } = require("../middleware/verifyToken.js");

// Category router
router.post("/", verifyToken, adminRole, createCategory);
router.delete("/", verifyToken, adminRole, deleteCategory);
router.patch("/", verifyToken, adminRole, updateCategory);
router.get("/detail", getCategory);
router.get("/", getCategoryList);

module.exports = router;
