const express = require('express');
const dayOfWeek = require('../models/dayOfWeek.js');
const dayOfWeekRouter = express.Router();
const newDayOfWeek = new dayOfWeek();

dayOfWeekRouter
    .route('/dayOfWeek')
    .post(newDayOfWeek.createDayOfWeek)
    .get(newDayOfWeek.getDayOfWeeks)


module.exports = dayOfWeekRouter