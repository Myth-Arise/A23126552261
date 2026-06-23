const axios = require("axios");

async function Log(stack, level, packageName, message) {
  try {
    await axios.post(
      process.env.LOG_URL,
      {
        stack,
        level,
        package: packageName,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`
        }
      }
    );
  } catch (error) {
    console.error(
      "Logging Failed:",
      error.response?.data || error.message
    );
  }
}

module.exports = Log;