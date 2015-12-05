'use strict';

// Import our express and our configuration
var express = require('express');
var configure = require('./config.js');

// Import our controllers
var indexControllers = require('./controllers/index.js');
var aboutControllers = require('./controllers/about.js');
var eventControllers = require('./controllers/events.js');
var sprint3Controllers = require('./controllers/sprint3.js');
var sprint4Controllers = require('./controllers/sprint4.js');
var sprint5Controllers = require('./controllers/sprint5.js');
var thanksControllers = require('./controllers/thanks.js');

// Create our express app
var app = express();

// Configure it
configure(app);

// Add routes mapping URLs to controllers
app.get('/', indexControllers.index);
app.get('/about', aboutControllers.about);
app.get('/events', eventControllers.listEvents);
app.get('/events/new', eventControllers.newEvent);
app.post('/events/new', eventControllers.saveEvent);
app.get('/events/:slug', eventControllers.getEvent);
app.post('/events/:slug', eventControllers.rsvp);
app.get('/sprint3', sprint3Controllers.sprint3);
app.get('/sprint4', sprint4Controllers.sprint4);
app.get('/sprint5', sprint5Controllers.sprint5);
app.get('/thanks', thanksControllers.thanks);

// put static content in public
app.use(express.static('public'));

module.exports = app;
