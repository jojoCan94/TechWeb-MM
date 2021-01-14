const app = require('express')();
const httpServer = require('http').Server(app);
const io = require('socket.io')(httpServer, {
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"],
        allowedHeaders: ["cors-header"],
        credentials: true
    }
});
let user = {
    key : "",
    name : "Unknown",
};
let users = [];
let connection_n = 0;
//MAIN SOCKET IO CONNECTION
io.on('connection', (socket)=> {
user.key = socket.id;

// generate "RANDOM" name... better: npm i -S unique-names-generator
user.name = "Agent " + socket.id.substring(0, 2).toUpperCase();
users.push(user);
    console.log('User connected, id: ' + socket.id + " <> " + users[connection_n].name);
    
socket.emit('userAuth', user.name);

connection_n++;
//END OF CONNECTION
});

//SERVER LISTENING ON PORT:
httpServer.listen(3000, ()=> {
    console.log('listening on port: 3000');
});