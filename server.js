const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const app = express();
const db = mongoose.connection;
const locationsController = require("./controllers/locationsController");
require("dotenv").config();

//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3003;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
console.log(MONGODB_URI);

// Error / success
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", MONGODB_URI));
db.on("disconnected", () => console.log("mongo disconnected"));

// MIDDLEWARE

app.use(cors());
app.use(express.json());
app.use("/locations", locationsController);

app.listen(PORT, () => {
    console.log(`I'm alive and listening on `, PORT);
});

// mongoose.connect("mongodb://localhost:27017/unit3projectCrud");
// mongoose.connection.once("open", () => {
//   console.log("Connection to database iz gud!");
// });
