var http = require("http");


http.createServer(function (request, response) {
    //send the http header
    //http status: 200 : OK
    //content type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    //send the response body as "Hello World"
    response.end('Hello World\n');

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log('Our app is running on port ${ PORT }');
    });
    


}).listen(3000);


//console will print the message
console.log('Server running at http://127.0.0.1:3000/');