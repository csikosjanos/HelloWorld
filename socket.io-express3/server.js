var express = require('express'),
	app = express(),

	http = require('http'),
	server = http.createServer(app),

	io = require('socket.io').listen(server);

server.listen(8080);

app.get('/', function (req, res) {
	res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
	socket.emit('news', { hello: 'world' });
	socket.on('my other event', function (data) {
		console.log(data);
	});
});