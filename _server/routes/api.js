'use strict';

var _ = require('underscore');
var PARTICIPANTS = require('./data/participants').participants;

exports.getParticipants = function (req, res) {
  console.log('List participants');
  return res.status(200).json(PARTICIPANTS);
};
