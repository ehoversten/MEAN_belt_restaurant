const path = require("path");
const mongoose = require('mongoose');

let RestaurantController = require("../controllers/RestaurantController.js");

module.exports = function(app) {

  app.get("/api/restaurants", RestaurantController.display_all);
  app.post("/api/restaurants", RestaurantController.create);
  app.get("/api/restaurants/:id", RestaurantController.find_restaurant);
  app.delete("/api/restaurants/:id", RestaurantController.delete);
  app.put("/api/restaurants/:id", RestaurantController.update);

  // if we dont hit ay of our backend routes, serve our Angular App
  app.all("*", (req, res, next)=> {
    res.sendFile(path.resolve("./client/public/dist/public/index.html"));
  });
}
