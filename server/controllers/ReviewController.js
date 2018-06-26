// Require our database and use our Restaurant Model
const Review = require('mongoose').model('Review');
const Restaurant = require('mongoose').model('Restaurant');

class ReviewController {
// ------- Find One Review METHOD ------------------ //
    find(req,res){
        Review.findOne({_id:req.params.id})
        .populate({
            model:"Restaurant",
            path:"restaurant"
        })
        .exec((err,review)=>{
            if(review){
                return res.json(review);
            }else{
                return res.json({
                    errors:err,
                    message:"Failed to populate restaurant for review."
                });
            }
        })
    }
// ------- display_all METHOD ------------------ //

  display_all(req, res) {
    Review.find( {} )
    .populate({
//--- our Foreign Key association
      model:'Restaurant',
      path: 'restaurant'
    })
// ---- once .populate() knows what we want to reference and where to find that blueprint we 'execute' the following function... which is our callback or error.
    .exec((err, data) => {
      if(reviews) {
        console.log("Found: ", reviews)
        // return all tasks as JSON OBJECTS
        return res.json(reviews);
			} else {
				return res.json( {
          "error":err,
          "message":"Something went terribly terribly wrong!",
        });
			}
    });
  }

// ------- create METHOD ------------------ //


  create(req, res) {
    let review = new Review(req.body);
    review.restaurant = req.params.id;
//----  save review to DB ------
    review.save(err=> {
      if(err) {
        // console.log("Something went wrong", err);
        return res.json({
          "error":err.errors,
          "message":"Failed to create review"
        });
      } else {
        //-----  find the associated Restaurant  ------
        Restaurant.findOne( {_id:req.params.id}, (err, restaurant)=> {
          if(restaurant) {
            // console.log("Found: ", restaurant);
          // put the ID of this review into the 'reviews' array in the this restaurant(_id) instance
            console.log(review);
            restaurant.reviews.push(review._id);

            restaurant.save(err=>{
                if(err){
                    return res.json("GO fix your problems");
                }else{
                    return res.json(review);
                }
            });
          } else {
            // console.log("Restaurant not found", err);
            return res.json({
              "error":err,
              "message":"Failed to find Restaurant with id:" + req.params.id
            });
          }
        });
        // console.log("review created successfully");
        // return res.json(review);
      }
    });

  }

  // ------- findById METHOD ------------------ //


    // find_review(req, res) {
    //   console.log("POST DATA: ", req.params);
    //   Review.findOne( {_id:req.params.id}, (err, review)=> {
    //     if(review) {
    //       console.log("Found: ", review);
    //       return res.json(review);
    //     } else {
    //       console.log("review not found", err);
    //       return res.json({
    //         "error":err,
    //         "message":"Failed to find review with id:"+req.params.id
    //       });
    //     }
    //   });
    // }



// ------- end of Controller ------------------ //

}  // end of RestaurantController()

// export our RestaurantController()
module.exports = new ReviewController();
