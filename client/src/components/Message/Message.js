import React from 'react'
import './Message.css'
import ReactEmoji from 'react-emoji';

const Message = ({message:{user,text},name}) => {
    let isSentByCurrentUser=false;
    const trimmedName =name.trim().toLowerCase();
    if(user=== trimmedName){
        isSentByCurrentUser=true;
    }
    



  return (
    isSentByCurrentUser 
    ?(
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{trimmedName} :</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorYellow">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
        )
        : (
          <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
              <p className="messageText colorRed">{ReactEmoji.emojify(text)}</p>
            </div>
            <p className="sentText pl-10">: {user}</p>
          </div>
        ))
}

export default Message





// (
//     <div className='messageConatiner justifyEnd'>
//         <div className='messageBox backgroundcolorful'>
//             <p className='messageText colorGreyishBlack'>
//                 {ReactEmoji.emojify(text)}
//             </p>
//         </div>
//         <p className='sentText pl-7'>{trimmedName}</p>
//     </div>
// ):(
// <div className='messageConatiner justifyStart'>
//         <p className='sentText pr-7'>{user}</p>
//         <div className='messageBox backgroundLight'>
//             <p className='messageText colorful'> {ReactEmoji.emojify(text)} </p>
//         </div>
//     </div>
// )
// )