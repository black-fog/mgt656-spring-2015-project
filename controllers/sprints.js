'use strict';

var events = require('../models/events');

function getsprint(request, response) {
    var contextData = {
    };
    console.log('here');
    var url = 'sprint' + request.params.id + '.html';
    response.render(url, contextData);
}


module.exports = {
    'getsprint':getsprint,
};
