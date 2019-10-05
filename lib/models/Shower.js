const mongoose = require('mongoose');

const showerSchema = new mongoose.Schema({
  tempBefore: {
    type: Number
  },
  tempPeak: {
    type: Number
  },
  humidityBefore: {
    type: Number
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

