'use strict';

var express = require('express'),
  bodyParser = require('body-parser'),
  api = require('./routes/api'),
  cors = require('cors');

var app = express();

app.set('port', process.env.PORT || 9000);
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'PUT, DELETE');
  next();
});

// JSON API

/**
 * Participants
 */
app.get('/api/v1/participants', api.getParticipants);
app.get('/api/v1/participants/:id', api.getParticipant);
app.put('/api/v1/participants/:id', api.updateParticipant);

app.listen(app.get('port'), function () {
  console.log('✔Express server listening on http://localhost:%d/', app.get('port'));
});
