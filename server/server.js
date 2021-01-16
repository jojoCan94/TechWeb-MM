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



const app2 = require('express')();
const httpServer2 = require('http').Server(app2);
const io2 = require('socket.io')(httpServer2, {
    cors: {
        origin: "http://localhost:8081",
        methods: ["GET", "POST"],
        allowedHeaders: ["cors-header"],
        credentials: true
    }
});
let user2 = {
    key : "",
    name : "Unknown",
};
let users2 = [];
let connection_n2 = 0;
//MAIN SOCKET IO CONNECTION
io2.on('connection', (socket2)=> {
user.key = socket2.id;

// generate "RANDOM" name... better: npm i -S unique-names-generator
user2.name = "Agent " + socket2.id.substring(0, 2).toUpperCase();
users2.push(user);
    console.log('User connected, id: ' + socket2.id + " <> " + users2[connection_n2].name);
    
socket2.emit('userAuth', user2.name);

connection_n2++;
//END OF CONNECTION
});

//SERVER LISTENING ON PORT:
httpServer2.listen(3001, ()=> {
    console.log('listening on port: 3001');
});