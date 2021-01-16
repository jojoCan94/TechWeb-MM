const app = require("express")();
const playerHttp = require("http").Server(app);
const playerIo = require("socket.io")(playerHttp, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
    allowedHeaders: ["cors-header"],
    credentials: true,
  },
});
const adminHttp = require("http").Server(app);
const adminIo = require("socket.io")(adminHttp, {
  cors: {
    origin: "http://localhost:8081",
    methods: ["GET", "POST"],
    allowedHeaders: ["cors-header"],
    credentials: true,
  },
});

//PLAYER - SOCKET
playerIo.on("connection", (playerSocket) => {
  console.log("Player client connected, connection id: " + playerSocket.id);
});
playerHttp.listen(3000, () => {
  console.log("player http server listening on port: 3000");
});

//ADMIN - SOCKET
adminIo.on("connection", (adminSocket) => {
  console.log("Admin client connected, connection id: " + adminSocket.id);
});
adminHttp.listen(3001, () => {
  console.log("admin http server listening on port: 3001");
});
