const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const port = process.env.PORT || 2000;


const app = express();
const publicPath = path.join(__dirname, '../public')
const server = http.createServer(app);
const io = socketIO(server);

// alow use go in side public folder:
app.use(express.static(publicPath))

// io:
io.on('connection', socket => {
    console.log('client connected')
    socket.on('disconnect', ()=>{
        console.log('client disconnect')
    })
})

// server start:
server.listen(port, ()=>console.log(`server listen on port ${port}`));