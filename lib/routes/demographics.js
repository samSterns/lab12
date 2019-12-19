const { Router } = require('express');
const Demographic = require('../model/Demographic');

module.exports = Router()
  .post('/', (req, res, next) => {
    Demographic
      .create(req.body)
      .then(demographic => res.send(demographic))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    const { page = 1, perPage = 25 } = req.query;
    Demographic
      .find()
      .limit(Number(perPage))
      .skip((Number(page) - 1) * Number(perPage))
      .then(movies => res.send(movies))
      .catch(next);
  })

  .get('/engineer', (req, res, next) => {
    Demographic
      .getShareWomenEngineer()
      .then(shareWomenEngineer => res.send(shareWomenEngineer))
      .catch(next);
  })
  .get('/physical', (req, res, next) => {
    Demographic
      .getShareWomenPhysical()
      .then(shareWomenPhysical => res.send(shareWomenPhysical))
      .catch(next);
  })
  .get('/computer', (req, res, next) => {
    Demographic
      .getShareWomenComputer()
      .then(shareWomenComputer => res.send(shareWomenComputer))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Demographic
      .findById(req.params.id)
      .then(demographic => res.send(demographic))
      .catch(next);
  })

  .patch('/:id', (req, res, next) => {
    Demographic
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(demographic => res.send(demographic))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Demographic
      .findByIdAndDelete(req.params.id)
      .then(demographic => res.send(demographic))
      .catch(next);
  });
