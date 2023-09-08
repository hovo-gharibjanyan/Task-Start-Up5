const express = require('express');
const ProfAv = require('../models/professorAv.js');
const profAv = express.Router();
const myProfAv = new ProfAv();

profAv
    .route('/profAv')
    .post(myProfAv.createProfessorAv)

profAv
    .route('/profAv/:professor')
    .get(myProfAv.getProfessorAv)

module.exports = profAv