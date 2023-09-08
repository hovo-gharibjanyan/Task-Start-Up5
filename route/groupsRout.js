const express = require('express');
const Groups = require('../models/groups.js');
const group = express.Router();
const myGroup = new Groups();

group
  .route('/group')
  .post(myGroup.createGroup)
  .get(myGroup.getGroup)


module.exports = group