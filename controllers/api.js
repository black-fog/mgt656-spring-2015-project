'use strict';

var events = require('../models/events');
var validator = require('validator');

// Date data that would be useful to you
// completing the project These data are not
// used a first.
//
var allowedDateInfo = {
  months: {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
  },
  minutes: [0, 30],
  hours: [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
    12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23
  ]
};

function list(request, response){
    var search = request.query.search;
    if (search){
	var evs = events.search(search)
	var JSONObj = {"events": evs}; 
	response.send(JSONObj);
    } else{
	var evs = events.all;
	var JSONObj = {"events": evs};
	response.send(JSONObj);
    }
}

/**
 * Export all our functions (controllers in this case, because they
 * handles requests and render responses).
 */
module.exports = {
  'list': list,
};
