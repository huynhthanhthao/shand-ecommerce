const express = require("express");
const router = express.Router();

const createAccount = require("../controllers/AccountController/create-account.js");
const deleteAccount = require("../controllers/AccountController/delete-account.js");
const getAccountList = require("../controllers/AccountController/get-account-list.js");
const getAccount = require("../controllers/AccountController/get-account.js");
const updateAccount = require("../controllers/AccountController/update-account.js");
const updateDetailAccount = require("../controllers/AccountController/update-detail-account.js");

// Account router
router.post("/", createAccount);
router.delete("/", deleteAccount);
router.patch("/", updateAccount);
router.patch("/detail", updateDetailAccount);
router.get("/detail", getAccount);
router.get("/", getAccountList);

module.exports = router;
