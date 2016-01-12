// can import other JS files using:
//    importScripts("script1.js");
// importScripts() is synchronous & does not return until the arguments are
// loaded and executed. Execution errors terminate the remainder of the
// worker script.


onmessage = function(event) {
    console.log('worker received: ' + event.data);
};
postMessage("Hello from a worker!");
