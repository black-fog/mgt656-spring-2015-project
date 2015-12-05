'use strict';

/**
 * Controller that renders our thanks page.
 */
function thanks (request, response) {
  response.render('thanks.html', {});
}

module.exports = {
  thanks: thanks
};
