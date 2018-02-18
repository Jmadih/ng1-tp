'use strict';

const _ = require('underscore');
const PARTICIPANTS = require('./data/participants').participants;

exports.getParticipants = function (req, res) {
  console.log('List participants');
  return res.status(200).json(PARTICIPANTS);
};

exports.getParticipant = function (req, res) {
  const id = getId(req);
  console.log('Get participant: id = ' + id);
  const index = _.findIndex(PARTICIPANTS, function (p) {
    return p.id === Number(id);
  });
  if (index === -1) {
    return res.status(404).json({error: 'The participant with id "' + id + '" doesn\'t exist.'});
  }
  return res.status(200).json(PARTICIPANTS[index]);
};

exports.updateParticipant = function (req, res) {
  var id = getId(req);
  console.log('Update participant: id = ' + id);
  var participant = req.body;
  var index = _.findIndex(PARTICIPANTS, function (p) {
    return p.id === Number(id);
  });
  if (index === -1) {
    return res.status(404).json({error: 'The participant with id "' + id + '" doesn\'t exist.'});
  }
  var oldParticipant = PARTICIPANTS[index];
  for (var prop in participant) {
    if (Object.prototype.hasOwnProperty.call(participant, prop)) {
      oldParticipant[prop] = participant[prop];
    }
  }
  PARTICIPANTS[index] = oldParticipant;
  return res.status(200).json(PARTICIPANTS[index]);
}

function getId(req) {
  return getParam(req, 'id');
}

function getParam(req, param) {
  return req.params[param];
}
