/*jshint node: true, jquery: true */

"use strict";

/**
 * Main Application Scripts
 */

// Enable JS if available
document.body.className += ' js';

// jQuery DOM Manipulation Library
// You must use this syntax to prevent issues, especially w/ Bootstrap.
window.$ = window.jQuery = require('jquery');

// Google Webfont Loader (optional)
require('./modules/_webfont');

// Requiring Vue
require('./modules/sidebar');
// require('./components/Alert');

// global.app = new Vue({
// 	el: '#main',
// 	delimiters: ['<%', '%>'],
// 	data: {
// 		type: 'success'
// 	}
// });
