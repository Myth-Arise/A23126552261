require("dotenv").config();


console.log("BASE_URL =", process.env.BASE_URL);
console.log("TOKEN =", process.env.TOKEN ? "Loaded" : "Missing");

const express = require("express");
const cors = require("cors");

const schedulerRoutes = require("./routes/schedulerRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    status: "OK"
  });
});

app.use("/", schedulerRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});