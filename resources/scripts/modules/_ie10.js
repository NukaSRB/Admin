/*jshint node: true */

"use strict";

/*
 * Enable Better IE10 Support
 * @link http://getbootstrap.com/getting-started/#support
 */

if (navigator.userAgent.match(/IEMobile\/10\.0/) || navigator.userAgent.match(/MSIE 10.*Touch/))
{
    var msViewportStyle = document.createElement('style');
    msViewportStyle.appendChild( document.createTextNode( '@-ms-viewport{width:auto !important}' ) );
    document.querySelector('head').appendChild(msViewportStyle);
}
