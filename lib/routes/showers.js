const { Router } = require('express');
const Shower = require('../models/Shower');

module.exports = Router()
  .get('/', (req, res, next) => {
    Shower
      .find()
      .then(showers => res.send(showers))
      .catch(next);
  });
