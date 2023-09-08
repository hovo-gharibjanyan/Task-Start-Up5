const express = require('express');
const Prof = require('../models/professor.js');
const prof = express.Router();
const myProf = new Prof();

prof
    .route('/prof')
    .post(myProf.createProfessor)

prof
    .route('/prof/:firstName')
    .get(myProf.getProfessor)

module.exports = prof