import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Join.css';
import { useRef } from 'react';

const Join = () => {
  const [name, setName] = useState('');   // initialize with empty string
  const [room, setRoom] = useState('');

  const myRef = useRef();
  function focus(myRef) {
    // setTimeout(() => { myRef.current?.focus() }, 50);
    myRef.current?.focus()
  }
  useEffect(() => { focus(myRef) },[])
  console.log("join");
  return (
    <div className='joinOuterContainer'>
      <div className='joinInnerContainer'>
        <h1 className='heading'>Gossip Arena</h1>
        <div><input ref={myRef} placeholder='Enter Your Name'
          className='joinInput' type='text' onChange={(event) => setName(event.target.value)} /></div>
        <div><input placeholder='Enter or Create Your Room ID' className='joinInput mt-20' type='text' onChange={(event) => setRoom(event.target.value)} /></div>

        <Link onClick={(event) => (!name || !room || name.length>10 ||room.length>10 ) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room.toUpperCase()}`}>
          <button className='button mt-20' type='submit'>Enter</button>
        </Link>
        <p className='pp'>Name and Room ID length should be less than 10</p>
      </div>
    </div>
  )
}

export default Join