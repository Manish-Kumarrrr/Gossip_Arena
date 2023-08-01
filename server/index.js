// import express from "express";
// // import {Socketio} from "socket.io";
// import { Server } from "socket.io";
// import http from 'http';
// // import { createServer } from "http";

const PORT=process.env.PORT|| 5000;

// const app=express();
// const server=http.createServer(app);
// const io=Server(server);

// server.listen(PORT,()=> console.log(`server has started on port ${PORT}`))


// import { createServer } from "http";
// import { Server } from "socket.io";

// const httpServer = createServer();
// const app=express();


// const io = new Server(app, {
    //     // ...
    //   });
    
    // io.on("connection", (socket) => {
        //     // ...
        //   });
        // app.use('/',router)
        
        // app.listen(PORT,()=>{
        //     console.log("listening to requests");
        // });
        
        
        
        
        
        
import router from './router.js';
import cors from 'cors';
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { 
  
  cors: {
    origin: "http://localhost:3000"
  }
 });

app.use('/', router);
// app.get('/',(req,res)=>res.send("server is listening request (direct)"))

io.on("connection", (socket) => {
  console.log("we have a new connection!!!");
  
  socket.on('disconnect',()=>{
    console.log("user had left!!!");
  })
});

httpServer.listen(PORT,()=>console.log("server is starting on port ",PORT));