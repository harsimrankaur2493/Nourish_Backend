// Enhanced User model schema - update your existing models/User.js file
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  // Existing fields
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  number: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  city: { type: String },
  state: { type: String },
  gender: { type: String },
  age: { type: Number },
  height: { type: Number },
  weight: { type: Number },
  bmi: { type: Number },
  diabetes: { type: String },
  foodAllergies: { type: String },
  bloodPressure: { type: String },
  cholesterolLevels: { type: String },
  smokingHabit: { type: String },
  alcoholConsumption: { type: String },
  physicalActivity: { type: String },
  currentMedications: { type: String },
  medicalHistory: { type: String },
  doctorsNotes: { type: String },
  emergencyContact: { type: String },
  requests: [{ type: String }],
  
  // New fields aligned with meal plan context
  activityLevel: { type: String },
  weightGoal: { type: String },
  maintenanceCalories: { type: Number },
  dailyMacros: {
    protein: { type: Number },
    carbs: { type: Number },
    fats: { type: Number },
    fiber: { type: Number }
  }
});

module.exports = mongoose.model('User', UserSchema);
