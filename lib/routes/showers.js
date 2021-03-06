const { Router } = require('express');
const Shower = require('../models/Shower');

module.exports = Router()
  .get('/', (req, res, next) => {
    Shower
      .find()
      .then(showers => res.send(showers))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Shower
      .findById(req.params.id)
      .then(shower => res.send(shower))
      .catch(next);
  })
  .post('/', (req, res) => {
    const { tempBefore, tempPeak, humidityBefore, humidityPeak, duration } = req.body;
    Shower
      .create({ tempBefore, tempPeak, humidityBefore, humidityPeak, duration })
      .then(shower => res.status(200).json(shower));
  })
  .patch('/:id', (req, res, next) => {
    Shower
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(shower => res.send(shower))
      .catch(next);
  });
