const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
    name: String,
    location: String,
    description: String,
    cost: Number,
    image: [String],
    recommendation: Boolean,
});

const Logs = mongoose.model("Log", logSchema);

module.exports = Logs;
