const express = require("express");
const router = express.Router();
const addAddress = require("../controllers/AddressReceiveController/add-address");
const deleteAddress = require("../controllers/AddressReceiveController/delete-address");
const getAddress = require("../controllers/AddressReceiveController/get-address");
const getAddressDefault = require("../controllers/AddressReceiveController/get-address-default");
const getAllAddress = require("../controllers/AddressReceiveController/get-all-address");
const updateAddress = require("../controllers/AddressReceiveController/update-address");

// Import middleware
const { verifyToken } = require("../middleware/verifyToken.js");

// Account router
router.post("/", verifyToken, addAddress);
router.get("/", verifyToken, getAddress);
router.get("/all", verifyToken, getAllAddress);
router.get("/default", verifyToken, getAddressDefault);
router.delete("/", verifyToken, deleteAddress);
router.patch("/", verifyToken, updateAddress);

module.exports = router;
