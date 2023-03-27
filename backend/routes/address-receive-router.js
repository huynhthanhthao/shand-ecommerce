const express = require("express");
const router = express.Router();
const addAddress = require("../controllers/AddressReceiveController/add-address");
const deleteAddress = require("../controllers/AddressReceiveController/delete-address");
const getAddress = require("../controllers/AddressReceiveController/get-address");
const getAddressDefault = require("../controllers/AddressReceiveController/get-address-default");
const getAllAddress = require("../controllers/AddressReceiveController/get-all-address");
const updateAddress = require("../controllers/AddressReceiveController/update-address");

// Account router
router.post("/", addAddress);
router.get("/", getAddress);
router.get("/all", getAllAddress);
router.get("/default", getAddressDefault);
router.delete("/", deleteAddress);
router.patch("/", updateAddress);

module.exports = router;
