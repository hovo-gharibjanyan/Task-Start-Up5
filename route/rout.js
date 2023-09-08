const express = require('express');
const academicYear = require('../models/academicYear.js');
const academicYearRouter = express.Router();
const newAcademyYear = new academicYear();

academicYearRouter
    .route('/academyYear')
    .post(newAcademyYear.createAcademyYear)


academicYearRouter
    .route('/academyYear/:name')
    .get(newAcademyYear.getAcademyYear)


module.exports = academicYearRouter;