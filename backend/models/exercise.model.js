const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
    date: { type: Date, required: true },
    description: { type: String, required: true},
    duration: { type: Number, required: true},
    weight: { type: Number, required: true},
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;