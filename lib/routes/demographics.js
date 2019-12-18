const { Router } = require('express');
const Demographic = require('../model/Demographic');

module.exports = Router()
  .post('/', (req, res, next) => {
    Demographic
      .create(req.body)
      .then(movie => res.send(movie))
      .catch(next);
  });
  