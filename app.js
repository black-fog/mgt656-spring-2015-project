'use strict';

// Import our express and our configuration
var express = require('express');
var configure = require('./config.js');

// Import our controllers
var indexControllers = require('./controllers/index.js');
var aboutControllers = require('./controllers/about.js');
var eventControllers = require('./controllers/events.js');
var sprintControllers = require('./controllers/sprints.js');
var thanksControllers = require('./controllers/thanks.js');
var apiControllers = require('./controllers/api.js');

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
app.get('/api/events', apiControllers.list);
app.get('/sprint:id', sprintControllers.getsprint);
app.get('/thanks', thanksControllers.thanks);

// put static content in public
app.use(express.static('public'));

module.exports = app;
