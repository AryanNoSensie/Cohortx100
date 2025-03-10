"use strict";
function delayedCall(anotherfn) {
    setTimeout(function () {
        anotherfn();
    }, 1000);
}
function log() {
    console.log("Logging");
}
delayedCall(log);
