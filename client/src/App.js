import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom'; 
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
const App =()=>{
    console.log("app");
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Join/>}/>
            <Route path="/re-entry" exact element={<Join/>}/>
            <Route path="/chat"  element={<Chat />}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App;