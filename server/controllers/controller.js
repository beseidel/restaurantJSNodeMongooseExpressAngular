var Restaurants = require('../models/model')
module.exports = {
    allRestaurants: function(req, res){
        console.log("sjfhsjkghsghgs")
        Restaurants.find().then(data => res.json(data)).catch(err => res.json(err))
    },
    createRestaurants: function(req, res){
        console.log("I am in Create ")
        console.log(req.body)
        Restaurants.create({name: req.body.name, cuisine: req.body.cuisine, reviews: []}).then(data => res.json(data)).catch(err=> res.json(err))
    },
    editRestaurants: function(req, res){
        Restaurants.findOneAndUpdate({_id:req.params.id}, req.body).then(data => res.json(data)).catch(err=> res.json(err))
    },
    deleteRestaurants: function(req, res){
        Restaurants.deleteOne({_id:req.params.id}).then(data => res.json(data)).catch(err => res.json(err))
    },
    oneRestaurants: function(req, res){
        Restaurants.findOne({_id: req.params.id}).then(data => res.json(data)).catch(err => res.json(err))
    },
    createReview: function(req, res){
        Review.create({name: req.body.name, stars: 0, content: req.body.content}).then(data => res.json(data)).catch(err=> res.json(err))
    }
}