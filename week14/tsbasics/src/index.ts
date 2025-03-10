function delayedCall(anotherfn : ()=> void ){
    setTimeout(function(){
        anotherfn();
    }, 1000);
}
function log(){
    console.log("Logging");
}
delayedCall(log);