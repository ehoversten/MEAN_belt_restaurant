// Require our DATABASE
// const mongoose = require('mongoose');
const mongoose = require('mongoose'), Schema = mongoose.Schema;

// Define our Model (Blueprint)
const ReviewSchema = new mongoose.Schema({
  reviewer_name:   { type: String, required: [true, "Name required"], minlength:[ 3, "Name must be at least three characters" ] },
  rating:      { type: Number, required: [true, "Rating required"] },
  restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant' }
}, { timestamps: true });

// Export our MODEL
mongoose.model('Review', ReviewSchema);
