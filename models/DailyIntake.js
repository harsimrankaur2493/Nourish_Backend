const mongoose = require('mongoose');

const DailyIntakeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  calories: { type: Number, default: 0 },
  nutrients: {
    protein: { type: Number, default: 0 },
    carbs: { type: Number, default: 0 },
    fats: { type: Number, default: 0 },
    fiber: { type: Number, default: 0 }
  }
});

module.exports = mongoose.model('DailyIntake', DailyIntakeSchema);
