const axios = require("axios");
const Log = require("../utils/logger");

async function getDepots() {
  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/depots`,
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
      "Fetched depots successfully"
    );

    return response.data.depots;
  } catch (error) {

    await Log(
      "backend",
      "error",
      "service",
      "Failed to fetch depots"
    );

    throw error;
  }
}

module.exports = {
  getDepots
};