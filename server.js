var http = require("http");

function start() {
    function onRequest(request, response){
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        console.log("request received");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started");
}

exports.start = start;

