const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../frontend")));

const dbPath = path.join(__dirname, "data.json");
let database = [];

fs.readFile(dbPath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading database file:", err);
    process.exit(1);
  }
  database = JSON.parse(data);
});

const findTemperature = (cityName) => {
  const city = database.find(
    (entry) => entry.Name.toLowerCase() === cityName.toLowerCase()
  );
  return city ? city : null;
};

app.get("/temperature", (req, res) => {
  const cityName = req.query.q;

  if (!cityName) {
    return res
      .status(400)
      .json({ Status: "failure", Message: "City name is required" });
  }

  const cityData = findTemperature(cityName);

  if (cityData) {
    return res.json({
      Status: "success",
      Response: cityData,
    });
  } else {
    return res.json({ Status: "failure" });
  }
});

app.post("/temperature", (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res
      .status(400)
      .json({ Status: "failure", Message: "City name is required" });
  }

  const cityData = findTemperature(query);

  if (cityData) {
    return res.json({
      Status: "success",
      Response: cityData,
    });
  } else {
    return res.json({ Status: "failure" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
