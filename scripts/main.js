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
require('./_modules/_webfont');

// Twitter Bootstrap Optimized Build
require('./_modules/_bootstrap');

// IE/Mobile Platform Detection
require('./_modules/_ie10');
// require('./_modules/_mobile'); // (optional)

// Load Javascript Custom Forms (optional)
// Please don't use this module...
// require('./_modules/_jcf');

// Load Your Custom Modules
require('./_modules/_example');

// Load Google Analytics
// You might want to move this higher for more priority
require('./_modules/_ganalytics');
