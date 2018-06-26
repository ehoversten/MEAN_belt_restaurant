// Require our DATABASE
// const mongoose = require('mongoose');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

// Define our Model (Blueprint)
const ReviewSchema = new mongoose.Schema({
  reviewer_name:{
    type: String,
    required: [true, "Name required"],
    minlength:[ 3, "Name must be at least three characters" ]
  },
  rating:      { type: Number, required: [true, "Rating required"] },
  review:{
    type:String,
    required:[true,"Review Required"],
    minlength:3
  },

  restaurant:  { type:ObjectId, ref: 'Restaurant' }
}, { timestamps: true });

// Export our MODEL
mongoose.model('Review', ReviewSchema);
