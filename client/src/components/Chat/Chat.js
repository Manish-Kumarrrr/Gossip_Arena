import React ,{useEffect,useState} from 'react'
import {useLocation } from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';

let socket;

const Chat = () => {
  const location=useLocation();
  const [name,setName]=useState();
  const [room,setRoom]=useState();
  const ENDPOINT='localhost:5000';
  useEffect(()=>{
    console.log(location)
    const {namee,rroom}=queryString.parse(location.search);

socket=io(ENDPOINT);

    setName(namee);
    setRoom(rroom);
    console.log(socket);
  })
  console.log("chat");
  return (
    <div>Chat</div>
  )
}

export default Chat