const express = require("express");
const router = express.Router();

const createAccount = require("../controllers/AccountController/create-account.js");
const deleteAccount = require("../controllers/AccountController/delete-account.js");
const getAccountList = require("../controllers/AccountController/get-account-list.js");
const getAccount = require("../controllers/AccountController/get-account.js");
const updateAccount = require("../controllers/AccountController/update-account.js");
const updateDetailAccount = require("../controllers/AccountController/update-detail-account.js");

// Import middleware
const { verifyToken } = require("../middleware/verifyToken.js");
const { adminRole } = require("../middleware/verifyToken.js");
const getTopRanking = require("../controllers/AccountController/get-top-ranking.js");

// Account router
router.post("/", verifyToken, adminRole, createAccount);
router.delete("/", verifyToken, adminRole, deleteAccount);
router.patch("/", verifyToken, adminRole, updateAccount);
router.patch("/detail", verifyToken, updateDetailAccount);
router.get("/detail", verifyToken, getAccount);
router.get("/top-ranking", getTopRanking);
router.get("/", verifyToken, adminRole, getAccountList);

module.exports = router;
