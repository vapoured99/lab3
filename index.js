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

    var readStream = fs.createReadStream(__dirname + '/index.html');
    //send a message
    readStream.pipe(respone);

}).listen(PORT);


//console will print the message
console.log('Server running at http://127.0.0.1:' + PORT);