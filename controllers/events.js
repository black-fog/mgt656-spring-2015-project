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
/**
 * Controller that renders one event in HTML
 */
function getEvent(request, response) {
  var currentTime = new Date();
  var contextData = {
    'event': events.getById(parseInt(request.params.slug)),
    'cur_time': currentTime
  };
  response.render('one.html', contextData);
}

/**
 * Controller that renders a list of events in HTML.
 */
function listEvents(request, response) {
  var currentTime = new Date();
  var contextData = {
    'events': events.all,
    'cur_time': currentTime
  };
  response.render('event.html', contextData);
}

/**
 * Controller that renders a page for creating new events.
 */
function newEvent(request, response){
  var contextData = {};
  response.render('create-event.html', contextData);
}

/**
 * Controller to which new events are submitted.
 * Validates the form and adds the new event to
 * our global list of events.
 */
function saveEvent(request, response){
  var contextData = {errors: []};

  if (validator.isLength(request.body.title, 5, 50) === false) {
    contextData.errors.push('Your title should be between 5 and 100 letters.');
  }
    /**
       The image URL must begin with ‘http://’ or ‘https://’ and end with ‘.gif’ or ‘.png’.
       The title must be less than 50 characters
       The location must be less than 50 characters
       The year must be 2015 or 2016
       The month must be between 0 to 11, inclusive
       The hour must be 0-23
       The minute must be 0 or 30
    */
    
  if (parseInt(request.body.minute) != 0 && parseInt(request.body.minute) != 30){
      contextData.errors.push('Your minute must be either 0 or 30')
  }
  
  if (parseInt(request.body.year) != 2016 && parseInt(request.body.year) != 2015){
      contextData.errors.push('Your year must be 2015 or 2016')
  }
  if (isNaN(request.body.month) || parseInt(request.body.month) < 0 || parseInt(request.body.month) > 11){
      contextData.errors.push('Your month must be an integer from 0 to 11')
  }
  if (isNaN(request.body.day) || parseInt(request.body.day) < 1 || parseInt(request.body.day) > 31){
      contextData.errors.push('Your month must be an integer from 0 to 11')
  }
  if (isNaN(request.body.hour) || (parseInt(request.body.hour) <0 || parseInt(request.body.hour)> 23)){
      contextData.errors.push('Your hour must be between 0 and 23 inclusive.')
  }
  if (!validator.isURL(request.body.image)) { 
      contextData.errors.push('Your image must be a URL')
  }   
    var image_url = request.body.image
  if(!image_url.match(/^(.)+.png/i) && !image_url.match(/^(.)+.gif/i)){
      contextData.errors.push('your image must be a gif or png')
  }
  if (validator.isLength(request.body.location, 1,50) === false) {
      contextData.errors.push('your location is at most 50 chars')
  }
  if (contextData.errors.length === 0) {
      var id = events.all.length
    var newEvent = {
	id: id,
      title: request.body.title,
      location: request.body.location,
      image: request.body.image,
      date: new Date(),
      attending: []
    };
    events.all.push(newEvent);
      var contextData = {
	  'event': newEvent
      };
      response.redirect('/events/' + id);
  }else{
    response.render('create-event.html', contextData);
  }
}

function eventDetail (request, response) {
  var ev = events.getById(parseInt(request.params.id));
  if (ev === null) {
    response.status(404).send('No such event');
  }
  response.render('event-detail.html', {event: ev});
}

function rsvp (request, response){
  var ev = events.getById(parseInt(request.params.slug));
  if (ev === null) {
    response.status(404).send('No such event');
  }
  if(validator.isEmail(request.body.email) && validator.normalizeEmail(request.body.email).match(/^(.*?)+yale.edu$/)){
    ev.attending.push(request.body.email);
    response.redirect('/events/' + ev.id);
  }else{
  var contextData = {
    'event': ev,
      errors: []
  };
      contextData.errors.push('Invalid email');
  response.render('one.html', contextData);
  }
}


/**
 * Export all our functions (controllers in this case, because they
 * handles requests and render responses).
 */
module.exports = {
  'listEvents': listEvents,
  'getEvent': getEvent,
  'eventDetail': eventDetail,
  'newEvent': newEvent,
  'saveEvent': saveEvent,
  'rsvp': rsvp
};
