const axios = require("axios");

async function getDepots() {
  const response = await axios.get(
    `${process.env.BASE_URL}/depots`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`
      }
    }
  );

  return response.data.depots;
}

module.exports = {
  getDepots
};