const express = require('express');
const Object = require('../models/object.js');
const object = express.Router();
const myObject = new Object();

object
    .route('/object')
    .post(myObject.createObject)
    .get(myObject.getObjects)

module.exports = object