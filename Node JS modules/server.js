var http=require('http');

http.createServer(function(req,res){
	res.writeHead(200,{"content-Type":"text/plain"});
	res.write("hello world!");
	res.end();
}).listen(8080);

console.log("server is started");