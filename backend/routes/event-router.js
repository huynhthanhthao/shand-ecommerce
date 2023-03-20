const express = require("express");
const router = express.Router();

// import controller

const createEvent = require("../controllers/EventController/create-event.js");
const deleteEvent = require("../controllers/EventController/delete-event.js");
const getEventList = require("../controllers/EventController/get-event-list.js");
const getEvent = require("../controllers/EventController/get-event.js");
const updateEvent = require("../controllers/EventController/update-event.js");

//Event router
router.post("/", createEvent);
router.delete("/", deleteEvent);
router.patch("/", updateEvent);
router.get("/detail", getEvent);
router.get("/", getEventList);

module.exports = router;
