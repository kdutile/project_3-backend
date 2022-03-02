const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
    name: String,
    location: String,
    cost: Number,
    image: [String],
    willRecommend: Boolean,
});

const Logs = mongoose.model("Log", locationSchema);

module.exports = Locations;
