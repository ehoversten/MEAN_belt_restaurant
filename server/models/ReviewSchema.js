// Require our DATABASE
const mongoose = require('mongoose');

// Define our Model (Blueprint)
const ReviewSchema = new mongoose.Schema({
  reviewer_name:   { type: String, required: [true, "Name required"], minlength:[ 3, "Name must be at least three characters" ] },
  rating:      { type: Number, required: [true, "Rating required"] },
  // rest_review: { type: Schema.Types.ObjectId, ref: 'Restaurant' }
  // rest_review:   [{ type: String, ref: 'Restaurant' }],
  _restaurant_id: { type: Number, ref: 'Restaurant'}
}, { timestamps: true });

// Export our MODEL
mongoose.model('Review', ReviewSchema);
