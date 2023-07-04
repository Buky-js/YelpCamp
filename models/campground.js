
const { Schema, model } = require('mongoose');

const CampgroundSchema = new Schema({
    title: String,
    proce: String,
    description: String,
    location: String
});

module.exports = model('Campground', CampgroundSchema);