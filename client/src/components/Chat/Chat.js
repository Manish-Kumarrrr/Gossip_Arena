import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';

let socket;

const Chat = () => {
  const location = useLocation();
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'localhost:5000';
  useEffect(() => {
    console.log(location)
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, () => { });

    console.log(socket);
    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [location, ENDPOINT])
  console.log("chat");


useEffect(()=>{
  socket.on('message',(message)=>{
  setMessages([...messages,message]);
  
  }),[messages]});

  // function for sending messages




  return (
    <div>Chat</div>
  )
}

export default Chat