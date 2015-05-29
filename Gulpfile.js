/* jshint node: true */

/**
 * Gulp Tasks
 *
 * @package Esensi\Build
 * @author daniel <daniel@emersonmedia.com>
 * @author matt <matt@emersonmedia.com>
 * @copyright 2015 Emerson Media LP
 * @license https://github.com/esensi/build/blob/master/LICENSE.txt MIT License
 * @link http://www.emersonmedia.com
 */

"use strict";

// Customize the path below to the location of the build.json file
global.buildOptions = require('./build.json');
require('esensi-build');
