const express = require("express");

const path = require("path");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

const connectDB = require("./config/db");

connectDB();

//template engine

app.set("views", path.join(__dirname, "/views"));

app.set("view engine", "ejs");

//Routes
app.use("/api/files", require("./routes/files"));

app.use("/files", require("./routes/show"));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});