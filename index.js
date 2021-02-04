var http = require("http");

fs = require('fs');
const PORT = process.env.PORT || 3000;


http.createServer(function (request, response) {
    //send the http header
    //http status: 200 : OK
    //content type: text/plain
    response.writeHead(200, 
        {'Content-Type': 'text/html',
         'Access-Control-Allow-Origin' : '*'});

    var readstream = fs.createReadStream(__dirname + '/index.html');
    //send a message
    readstream.pipe(response);

}).listen(PORT);


//console will print the message
console.log('Server running at http://127.0.0.1:' + PORT);