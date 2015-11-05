'use strict';

var events = require('../models/events');
/**
 * Controller that renders our index (home) page.
 */
function index (request, response) {
  var contextData = {
    'title': 'MGT 656',
    'tagline': 'You are doomed (just kidding).',
    'events': events.all,
    'cur_time': new Date(),
  };
  response.render('index.html', contextData);
}

module.exports = {
  index: index
};
