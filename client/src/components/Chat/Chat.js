import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';
import Infobar from '../Infobar/Infobar.js';
import Input from '../Input/Input.js'
import Messages from '../Messages/Messages.js'

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

    socket.emit('join', { name, room }, (error) => { 
      if(error){
      window.location.assign("/re-entry");
      // setTimeout(() => {  alert(error) }, 5000);
       
      }
    });

    console.log(socket);
    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [location, ENDPOINT])
  console.log("chat");


  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);

    })},[messages]);

  // function for sending messages
  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }

  console.log(message, messages);


  return (
    <div className={`outerContainer `}>
      <h1 className='heading'>Gossip Arena</h1>
      <div className='container'>
        <Infobar room={room}/>
        <Messages messages={messages} name={name}/>
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>

       
      </div>
    </div>
  )
}

export default Chat