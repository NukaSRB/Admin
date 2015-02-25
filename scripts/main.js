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

// Twitter Bootstrap Optimized Build
require('./_modules/_bootstrap');

// IE/Mobile Platform Detection
require('./_modules/_ie10');
require('./_modules/_mobile');

// Google Webfont Loader
// Optional.
//require('./_modules/_webfont');

// Retina Image Loader
require('retina');

// Load individual modules here (page specific JS)
require('./_modules/_yourmodule');

// Load Google Analytics
// You might want to move this higher for more priority
require('./_modules/_ganalytics');

$(function()
{
    // Custom JS here.
});
