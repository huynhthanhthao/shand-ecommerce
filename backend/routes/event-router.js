const express = require("express");
const router = express.Router();

// import controller

const createEvent = require("../controllers/EventController/create-event.js");
const deleteEvent = require("../controllers/EventController/delete-event.js");
const getEventList = require("../controllers/EventController/get-event-list.js");
const getEvent = require("../controllers/EventController/get-event.js");
const updateEvent = require("../controllers/EventController/update-event.js");

// Import middleware
const { verifyToken } = require("../middleware/verifyToken.js");
const { adminRole } = require("../middleware/verifyToken.js");

//Event router
router.post("/", verifyToken, adminRole, createEvent);
router.delete("/", verifyToken, adminRole, deleteEvent);
router.patch("/", verifyToken, adminRole, updateEvent);
router.get("/detail", getEvent);
router.get("/", getEventList);

module.exports = router;
