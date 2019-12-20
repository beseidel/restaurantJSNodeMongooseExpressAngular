var mongoose = require("mongoose")
var reviewsSchema = new mongoose.Schema({
    name: String,
    stars: Number,
    content: String
})
var restaurantSchema = new mongoose.Schema({
    name: String,
    cuisine: String,
    reviews: [reviewsSchema]
})
mongoose.model('review', reviewsSchema);
module.exports = mongoose.model('restaurant', restaurantSchema);