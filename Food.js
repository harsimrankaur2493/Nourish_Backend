const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  food_name: { type: String, required: true },
  calories: { type: Number },
  nutrients: {
    protein: { type: Number },
    carbs: { type: Number },
    fats: { type: Number },
    fiber: { type: Number }
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Food', FoodSchema);
