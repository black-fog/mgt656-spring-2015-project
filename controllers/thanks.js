'use strict';

/**
 * Controller that renders our thanks page for donating.  
 */
function thanks (request, response) {
  response.render('thanks.html', {});
}

module.exports = {
  thanks: thanks
};
