var http= require("http");

http.createServer(function(request,response){

    //sends Http header
    //http status: 200 OK
    //content Type: text/plain

    response.writeHead(200,{'Content-Type':'text/plain'});

    //Send the response body as Hello Wold
    response.end('Hello World \n');

}).listen(8081);

//console print message
console.log('Server started!!'); 