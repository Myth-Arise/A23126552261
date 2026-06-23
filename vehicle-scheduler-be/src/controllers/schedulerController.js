const { getDepots } = require("../services/depotService");
const { getVehicles } = require("../services/vehicleService");

const {
  generateMaintenanceSchedule
} = require("../services/schedulerService");

async function getAllDepots(req, res) {
  try {
    const depots = await getDepots();

    return res.status(200).json({
      depots
    });

  } catch (error) {
    console.error(error.response?.data || error.message);

    return res.status(500).json({
      message: error.message
    });
  }
}

async function getAllVehicles(req, res) {
  try {
    const vehicles = await getVehicles();

    return res.status(200).json({
      count: vehicles.length,
      vehicles
    });

  } catch (error) {
    console.error(error.response?.data || error.message);

    return res.status(500).json({
      message: error.message
    });
  }
}

async function generateSchedule(req, res) {
  try {
    const results =
      await generateMaintenanceSchedule();

    return res.status(200).json({
      results
    });

  } catch (error) {
    console.error(error.response?.data || error.message);

    return res.status(500).json({
      message: error.message
    });
  }
}

module.exports = {
  getAllDepots,
  getAllVehicles,
  generateSchedule
};