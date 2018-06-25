// Require our DATABASE
// const mongoose = require('mongoose');
const mongoose = require('mongoose'), Schema = mongoose.Schema;

// Define our Model (Blueprint)
const RestaurantSchema = new mongoose.Schema({
  name:     { type: String, required: [true, "Restaurant must have a name"], minlength:[3, "Name must be at least three characters"] },
  cuisine:  { type: String, required: [true, "Cuisine type required"], minlength:[ 3, "Name must be at least three characters" ] },
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
  // reviews: [ReviewSchema]
}, { timestamps: true });

// Export our MODEL
mongoose.model('Restaurant', RestaurantSchema);
