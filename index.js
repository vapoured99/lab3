var http = require("http");


http.createServer(function (request, response) {
    //send the http header
    //http status: 200 : OK
    //content type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    //send the response body as "Hello World"
    response.end('Hello World\n');
}).listen(3000);

const PORT = process.env.PORT || 3000;
applicationCache.listen(PORT, () => {
    console.log('Our app is running on port ${ PORT }');
});


//console will print the message
console.log('Server running at http://127.0.0.1:3000/');