const express = require("express");

const router = express.Router();

const {
  getAllDepots,
  getAllVehicles,
  generateSchedule
} = require("../controllers/schedulerController");

router.get("/depots", getAllDepots);

router.get("/vehicles", getAllVehicles);

router.get("/schedule", generateSchedule);

module.exports = router;