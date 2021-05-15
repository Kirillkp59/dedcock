console.log(1);

let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
server.listen(8080);

app.get('/', function(request, respons) {
    respons.sendFile(__dirname + '/chat.html');
});

io.sockets.on('connection', (socket) => {
    console.log('Негр подключилса');
    socket.on('sendSv', (data) => {
        io.sockets.emit('sendCl', {message: data});
    });  
});

