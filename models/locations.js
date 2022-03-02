const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  location: String,
  cost: Number,
  image: String,
  willRecommend: Boolean,
});

const Locations = mongoose.model("Location", locationSchema);

module.exports = Locations;
