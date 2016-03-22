// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

// browser-update.org
var $buoop = {
    c: 2
};

function $buo_f() {
    var e = document.createElement("script");
    e.src = "//browser-update.org/update.js";
    document.body.appendChild(e);
};
try {
    document.addEventListener("DOMContentLoaded", $buo_f, false)
} catch (e) {
    window.attachEvent("onload", $buo_f)
}

// typed.js
$(function () {
    $(".about").typed({
        strings: ["I'm a Linux enthusiast.", "I'm a web developer.", "I'm a Bash scripter.", "I'm a system administrator.", "I'm a Hoosier.", "I'm an Android fan.", "I'm a bad artist.", "I love good design.", "I'm a Trenta developer.",],
        typeSpeed: 50,
        backDelay: 1500,
        loop: true,
        loopCount: false,
    });
});

// Bitcoin Address Alert
function bitcoinAddress(){   var address = prompt("Donate Bitcoins to: ", "1BXDneR1MsMbZjnZRZL5UXyC9Z6j6eGknP");}
