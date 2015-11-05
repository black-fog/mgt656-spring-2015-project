'use strict';

var events = require('../models/events');
/**
 * Controller that renders our sprint report 
 */
function sprint3 (request, response) {
  var contextData = {
  };
  response.render('sprint3.html', contextData);
}

module.exports = {
    'sprint3':sprint3
};
