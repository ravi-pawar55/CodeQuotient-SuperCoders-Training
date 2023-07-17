// simple chat application using socket.io
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http); // socket.io module
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
}
);

// socket.io connection
io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    }
    );
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    }
    );
}

// socket instal command 
