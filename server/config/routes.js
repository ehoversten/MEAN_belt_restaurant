const path = require("path");
const mongoose = require('mongoose');

let RestaurantController = require("../controllers/RestaurantController.js");
let ReviewController = require("../controllers/ReviewController.js");

module.exports = function(app) {
  app.get("/api/restaurants", RestaurantController.display_all);
  app.post("/api/restaurants", RestaurantController.create);
  app.get("/api/restaurants/:id", RestaurantController.find_restaurant);
  app.delete("/api/restaurants/:id", RestaurantController.delete);
  app.put("/api/restaurants/:id", RestaurantController.update);

  app.post("/api/restaurants/:id/reviews", ReviewController.create);
  app.get("/api/reviews/:id",ReviewController.find);
  // if we dont hit ay of our backend routes, serve our Angular App
  app.all("*", (req, res, next)=> {
    res.sendFile(path.resolve("./client/public/dist/public/index.html"));
  });
}
