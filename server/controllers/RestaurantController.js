// Require our database and use our Restaurant Model
const Restaurant = require('mongoose').model('Restaurant');

class RestaurantController {

// ------- display_all METHOD ------------------ //

  display_all(req, res) {
    Restaurant.find( {} )
      .populate({
//---- our Foreign Key association
        model:'Review',
        path: 'reviews'
      })
// ---- once .populate() knows what we want to reference and where to find that blueprint we 'execute' the following function... which is our callback or error.
      .exec((err, data) => {
        if(data) {
          console.log("Found: ", data)
          // return all tasks as JSON OBJECTS
          return res.json(data);
  			} else {
  				return res.json( {
            "error":err,
            "message":"Something went terribly terribly wrong!",
          });
  			}
      });
  }

// ------- findById METHOD ------------------ //


  find_restaurant(req, res) {
      Restaurant.findOne({_id:req.params.id})
      .populate({
          path:"reviews",
          model:"Review"
      })
      .exec((err,data)=>{
          if(data){
              return res.json(data);
          }else{
              return res.json({
                "error":err,
                "message":"Failed to find Restaurant" + req.params.id
              });
          }
      })
  }

// ------- create METHOD ------------------ //


  create(req, res) {
    let restaurant = new Restaurant(req.body);

    restaurant.save(err=> {
      if(err) {
        console.log("Something went wrong", err);
        return res.json({
          "error":err.errors,
          "message":"Failed to create Restaurant"
        });
      } else {
        console.log("Restaurant created successfully");
        return res.json(restaurant);
      }
    });
  }


// ------- update METHOD ------------------ //

  update(req, res) {

    console.log("hit update route");
    Restaurant.findOne({_id: req.params.id}, (err, restaurant)=> {
      if(restaurant){
        // if the field was updated, update it. If not changed, save what we had before
        restaurant.name = req.body.name || restaurant.name;
        restaurant.cuisine = req.body.cuisine || restaurant.cuisine;

        restaurant.save( err=> {
          if(err) {
            console.log("Restaurant did not save", err);
            return res.json({
              "error":err.errors,
              "message":"Failed to update Restaurant" + req.params.id
            });
          } else {
            console.log("Restaurant updated successfully");
            return res.json(restaurant);
          }
        });

      } else {
        console.log("Something went sideways", err);
        return res.json({
          "error":err,
          "message":"Failed to find Restaurant" + req.params.id
        });
      }

    });

    // Restaurant.update(
    //   { _id:req.params.id },
    //   { $set:{
    //     title:req.body.name,
    //     description:req.body.cuisine,
    //     reviews:req.body.?
    //   }},
    //   () => {
    //
    // });
  }


// ------- destroy METHOD ------------------ //

  delete(req, res) {
    console.log("hit distroy route");
    Restaurant.findOne({_id: req.params.id}, (err, restaurant)=> {
      if(restaurant){

        Restaurant.remove( {_id:req.params.id}, function(err) {
          console.log("Found: ", restaurant);

          if(err) {
            console.log("Something went sideways", err);
            return res.json({
              "error":err,
              "message":"Failed to remove Restaurant" + req.params.id
            });
          } else {
            return res.json(restaurant);
          }
        });

      } else {
        return res.json({
          "error":err,
          "message":"Failed to find Restaurant" + req.params.id
        });
      }
    });
  }



// ------- end of Controller ------------------ //

}  // end of RestaurantController()

// export our RestaurantController()
module.exports = new RestaurantController();
