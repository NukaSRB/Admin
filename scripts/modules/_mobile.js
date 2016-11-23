/*jshint node: true */

"use strict";

/*
 * Browser platform detection
 */

var PlatformDetect = (function(){
    var detectModules = {};

    return {
        options: {
            cssPath: window.pathInfo ? pathInfo.base + pathInfo.css : 'css/'
        },
        addModule: function(obj) {
            detectModules[obj.type] = obj;
        },
        addRule: function(rule) {
            if(this.matchRule(rule)) {
                this.applyRule(rule);
                return true;
            }
        },
        matchRule: function(rule) {
            return detectModules[rule.type].matchRule(rule);
        },
        applyRule: function(rule) {
            var head = document.getElementsByTagName('head')[0], fragment, cssText;
            if(rule.css) {
                cssText = '<link rel="stylesheet" href="' + this.options.cssPath + rule.css + '" />';
                if(head) {
                    fragment = document.createElement('div');
                    fragment.innerHTML = cssText;
                    head.appendChild(fragment.childNodes[0]);
                } else {
                    document.write(cssText);
                }
            }

            if(rule.meta) {
                if(head) {
                    fragment = document.createElement('div');
                    fragment.innerHTML = rule.meta;
                    head.appendChild(fragment.childNodes[0]);
                } else {
                    document.write(rule.meta);
                }
            }
        },
        matchVersions: function(host, target) {
            target = target.toString();
            host = host.toString();

            var majorVersionMatch = parseInt(target, 10) === parseInt(host, 10);
            var minorVersionMatch = (host.length > target.length ? host.indexOf(target) : target.indexOf(host)) === 0;

            return majorVersionMatch && minorVersionMatch;
        }
    };
}());

// All Mobile detection
PlatformDetect.addModule({
    type: 'mobile',
    uaMatch: function(str) {
        if(!this.ua) {
            this.ua = navigator.userAgent.toLowerCase();
        }
        return this.ua.indexOf(str.toLowerCase()) != -1;
    },
    matchRule: function(rule) {
        return this.uaMatch('mobi') || this.uaMatch('midp') || this.uaMatch('ppc') || this.uaMatch('webos') || this.uaMatch('android') || this.uaMatch('phone os') || this.uaMatch('touch');
    }
});

// Detect rules
PlatformDetect.addRule({type: 'mobile', css: 'mobile.css'});
