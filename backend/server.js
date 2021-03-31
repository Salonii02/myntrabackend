require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Import Route
app.use("/verify", require("./routes/verify"));

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
