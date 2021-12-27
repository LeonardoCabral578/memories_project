const express = require("express");
const app = express();
const mongoose = require("mongoose");
import bodyParser from "body-parser";
import cors from "cors";

app.listen(8800, () => {
  console.log("Backend server is running!");
});
