var http = require('http');
var fs = require('fs');
//
// var server = http.createServer(function(req,res) {
//   console.log('request was made '+req.url);
//   res.writeHead(200,{'Content-type': 'text/plain'});
//   res.end('Hey ninjas');
// });
//
// server.listen(3000,'127.0.0.1');
// console.log('yo dawgs, now listening to port 3000');
//
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');

myReadStream.on('data',function(chunk) {
  console.log('new chunk recieved:');
  console.log(chunk);
})
