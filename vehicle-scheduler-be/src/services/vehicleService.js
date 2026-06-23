const axios = require("axios");
const Log = require("../utils/logger");

async function getVehicles() {
  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/vehicles`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`
        }
      }
    );

    await Log(
      "backend",
      "info",
      "service",
      "Fetched vehicles successfully"
    );

    return response.data.vehicles;
  } catch (error) {

    await Log(
      "backend",
      "error",
      "service",
      "Failed to fetch vehicles"
    );

    throw error;
  }
}

module.exports = {
  getVehicles
};