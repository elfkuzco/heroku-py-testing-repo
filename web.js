// Load the http module to create an http server
var http = require("http");

// Configure HTTP server to respond with Hello World to all requests
var server = http.createServer(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end(
    "<p>Hello there&#33;&#33;.This is the <a href='https://github.com/elfkuzco/heroku-py'>heroku-py Testing app</a>(from gzipped source).</p>"
  );
});

var port = process.env.PORT || 3000;

// Listen on assigned port
server.listen(port);

// Put a friendly message on the terminal
console.log("Server listening on port " + port);
