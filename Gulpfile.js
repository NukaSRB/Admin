/* jshint node: true */

"use strict";

/**
 * Gulp Task Autoloader
 */

// Require dependencies
var gulp = require('gulp');
var gutil = require('gulp-util');
var process = require('child_process');
var rsync = require('rsyncwrapper').rsync;
var sequence = require('run-sequence');

// Definitions for build tasks
global.configOpts = require('./build.json');

// Require esensi/build tasks
// @link http://github.com/esensi/build
require('esensi-build');

/**
 * Task: Launch to Deployment Environments
 *
 * @example:
 *     gulp launch
 */

gulp.task('launch', function() {

    // Get the original production state to reset when we're done
    var original = global.is_production;
    global.is_production = true;

    // Get all the environments we need to deploy to
    // Add them to the sequence of tasks to run
    var tasks = [];
    for(var environment in global.configOpts.deployment)
    {
        // Add the deploy task for the given environment
        tasks.push('deploy:' + environment);
    }

    // Add the callback that resets the production state when we're done
    tasks.push(function(){
        global.is_production = original;
    });

    // Now run the tasks in sequence
    sequence(tasks);
});


/**
 * Task: Deploy to Stage
 *
 * @example:
 *     gulp stage
 *     gulp deploy:stage
 */

gulp.task('stage', ['deploy:stage']); // Alias
gulp.task('deploy:stage', ['jekyll'], function(){
    deploy('deploy:stage');
});


/**
 * Task: Deploy to Production
 *
 * @example:
 *     gulp deploy
 *     gulp deploy:production
 */

gulp.task('deploy', ['deploy:production']); // Alias
gulp.task('deploy:production', ['jekyll'], function(){
    deploy('production');
});


/**
 * Task: Build Jekyll
 *
 * @example:
 *     gulp jekyll
 *     gulp jekyll:build
 *     gulp build:jekyll
 */

gulp.task('jekyll', ['jekyll:build']); // Alias
gulp.task('build:jekyll', ['jekyll:build']); // Alias
gulp.task('jekyll:build', ['build'], function(cb) {

    // Run `jekyll build` in a child process
    // Uses the `--lsi` flag to improve related blog posts
    process.exec('jekyll build --lsi', function(err, stdout, stderr) {
        gutil.log(stdout);
        cb(err);
    });
});

/**
 * Deploy to connection using rsync
 * @param  string connection name for SSH (see build.json)
 * @return void
 */
function deploy(connection) {
    var config = global.configOpts.deployment;
    rsync({
        args: ['--verbose'],
        ssh: true,
        src: config.source,
        dest: config.connections[connection],
        port: config.port,
        recursive: true,
        syncDest: false,
        compareMode: 'checksum',
    }, function(error, stdout, stderr, cmd) {
        gutil.log(stdout);
    });
}
