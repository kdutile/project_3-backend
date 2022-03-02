const express = require("express");
const Locations = require("../models/locations");
const router = express.Router();

router.get("/", (req, res) => {
    Locations.find({}, (err, foundLocations) => {
        res.json(foundLocations);
    });
});

router.post("/", (req, res) => {
    Locations.create(req.body, (err, createdLocation) => {
        res.json(createdLocation);
    });
});

router.put("/:id", (req, res) => {
    Locations.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedLocation) => {
            res.json(updatedLocation);
        }
    );
});

router.delete("/:id", (req, res) => {
    Locations.findByIdAndRemove(req.params.id, (err, deletedLocation) => {
        res.json(deletedLoaction);
    });
});

module.exports = router;