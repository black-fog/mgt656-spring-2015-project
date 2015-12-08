'use strict';

var events = require('../models/events');
/**
 * Controller that renders our sprint report 
 */
function sprint6 (request, response) {
  var contextData = {
  };
  response.render('sprint6.html', contextData);
}

module.exports = {
    'sprint6':sprint6
};
