const express = require("express");
const router = express.Router();

// import controller
const createAccount = require("../controllers/AccountController/create-account.js");
const deleteAccount = require("../controllers/AccountController/delete-account.js");
const getAccountList = require("../controllers/AccountController/get-account-list.js");
const getAccount = require("../controllers/AccountController/get-account.js");
const updateAccount = require("../controllers/AccountController/update-account.js");
const createCategory = require("../controllers/CategoryController/create-category.js");
const deleteCategory = require("../controllers/CategoryController/delete-category.js");
const getCategoryList = require("../controllers/CategoryController/get-category-list.js");
const updateCategory = require("../controllers/CategoryController/update-category.js");
const createEvent = require("../controllers/EventController/create-event.js");
const deleteEvent = require("../controllers/EventController/delete-event.js");
const getEventList = require("../controllers/EventController/get-event-list.js");
const getEvent = require("../controllers/EventController/get-event.js");
const updateEvent = require("../controllers/EventController/update-event.js");

// Account router
router.post("/create-account", createAccount);
router.delete("/delete-account", deleteAccount);
router.patch("/update-account", updateAccount);

router.get("/get-account", getAccount);
router.get("/get-account-list", getAccountList);

// Category router
router.post("/create-category", createCategory);
router.delete("/delete-category", deleteCategory);
router.patch("/update-category", updateCategory);
router.get("/get-category-list", getCategoryList);

//Event router
router.post("/create-event", createEvent);
router.delete("/delete-event", deleteEvent);
router.patch("/update-event", updateEvent);
router.get("/get-event-list", getEventList);
router.get("/get-event", getEvent);

module.exports = router;
