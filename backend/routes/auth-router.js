const express = require("express");
const router = express.Router();

// import controller
const loginController = require("../controllers/AuthController/login.js");

router.post("/login", loginController);
module.exports = router;
