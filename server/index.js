const PORT = process.env.PORT || 5000;

import { addUser, removeUser, getUser, getUsersInRoom } from './Users.js'
import router from './Router.js';
import cors from 'cors';
import express from "express";
import { createServer, get } from "http";
import { Server } from "socket.io";

const app = express();
app.use('/', router); 
const httpServer = createServer(app);
const io = new Server(httpServer
//                       ,{

//   cors: {
//     origin: "localhost:3000"
//   }
// } 
);

app.use(cors());

io.on("connection", (socket) => {
  console.log("we have a new connection!!!");

  socket.on('join', ({ name, room }, callback) => {
    console.log(name, room);
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.emit('message', { user: 'admin', text: `${user.name}, Welcome to the room ${user.room} 🤙🤟` })
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name},has joined` });
    socket.join(user.room);

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    

  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });
    io.to(user.room).emit('roomData', { room: user.room, users:getUsersInRoom(user.room) });
   
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);
    if (user) {
      io.to(user.room).emit('message', { user: "admin", text: `${user.name} has left.👋👋` })
    }
  })
});

httpServer.listen(PORT, () => console.log("server is starting on port ", PORT));
