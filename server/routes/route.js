module.exports = function(app) {
  var controller = require('../controllers/controller');
  app.get('/api/restaurants', controller.allRestaurants);
  app.get('/api/restaurants/:id', controller.oneRestaurants);
  app.post('/api/restaurants/create', function(req, res) {
    console.log(req.body);
    controller.createRestaurants(req, res);
  });
  app.put('/api/restaurants/update/:id', controller.editRestaurants);
  app.delete('/api/restaurants/delete/:id', controller.deleteRestaurants);
  app.post('/api/review/create', function(req, res) {
    controller.createReview(req, res);
  });
};
