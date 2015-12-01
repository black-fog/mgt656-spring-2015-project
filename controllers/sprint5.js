'use strict';

var events = require('../models/events');
/**
 * Controller that renders our sprint report 
 */
function sprint5 (request, response) {
  var contextData = {
  };
  response.render('sprint5.html', contextData);
}

module.exports = {
    'sprint5':sprint5
};
