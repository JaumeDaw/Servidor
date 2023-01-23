const express = require('express');
const http = require('http');
const socketio = require('socket.io');

let app = express();
let server = http.createServer(app);
let io = socketio(server);

io.on("connection",(socket) =>{
    console.log("Cliente Conectado");

    socket.emit('conectado');
    socket.on('enviar', (datos) =>{
        io.emit('difundir', datos);
    })
})

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/',(req,res) => {
    res.render('index');
})

server.listen(8080);