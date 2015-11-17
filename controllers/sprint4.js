'use strict';

var events = require('../models/events');
/**
 * Controller that renders our sprint report 
 */
function sprint4 (request, response) {
  var contextData = {
  };
  response.render('sprint4.html', contextData);
}

module.exports = {
    'sprint4':sprint4
};
