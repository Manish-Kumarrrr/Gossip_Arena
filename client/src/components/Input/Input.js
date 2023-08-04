import React, { useEffect, useRef } from "react";
import './Input.css'


const Input = ({message,setMessage,sendMessage}) => {
  const myRef = useRef();
  function focus(myRef) {
    // setTimeout(() => { myRef.current?.focus() }, 50);
    myRef.current?.focus()
  }

  useEffect(() => { focus(myRef) },[message])
  return (
    <form className="form">
    <input
    ref={myRef}
        className="input"
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(event) => setMessage(event.target.value)} 
        onKeyUp={(event) => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="sendButton" onClick={(event)=> sendMessage(event)}>Send</button>
</form>
  )
}

export default Input;



















