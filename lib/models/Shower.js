const mongoose = require('mongoose');

const showerSchema = new mongoose.Schema({
  tempBefore: {
    type: Number,
    required: true
  },
  tempPeak: {
    type: Number
  },
  humidityBefore: {
    type: Number,
    required: true
  },
  humidityPeak: {
    type: Number
  },
  duration: {
    type: Number
  }
}, { timestamps: true },
{ 
  toJSON: {
    transform: function(doc, ret) {
      delete ret.__v;
    }
  } });

module.exports = mongoose.model('Shower', showerSchema);

