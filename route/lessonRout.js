const express = require('express');
const Lesson = require('../models/lessons.js');
const lesson = express.Router();
const myLesson = new Lesson();

lesson
  .route('/lesson')
  .post(myLesson.createLesson)
  .get(myLesson.getLessons)


module.exports = lesson