const mongoose = require('mongoose');

const VitalsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  timestamp: { type: Date, default: Date.now },
  sugarReading: { type: Number },
  weightReading: { type: Number }
});

module.exports = mongoose.model('Vitals', VitalsSchema);
