'use strict';

var events = require('../models/events');
/**
 * Controller that renders our index (home) page.
 */
function index (request, response) {
  var contextData = {
    'title': 'BlackFog',
    'tagline': 'Prepare to find some awesome events..',
    'events': events.all,
    'cur_time': new Date(),
    'test': '0'  
  };
  response.render('index.html', contextData);
}

module.exports = {
  index: index
};
