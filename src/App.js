import { useEffect, useState } from "react";
import React from "react";
import image from "./apple.jpg";
import video from "./ball.mp4";
import './App.css';

function App(){
    const [state, setState] = useState('');
    const [isGreen, setIsGreen] = useState(true);


    const changetext = async () => {
    const responce = await fetch('http://www.boredapi.com/api/activity/');
    const data = await responce.json();
    setState(data.activity);
    setIsGreen(!isGreen) 
}
    useEffect(()=>{
        changetext();
    }, [])

return(
    <div className="App">
        <h1 className="header">If you're bored, click on the apple and see what you can do</h1>
       <button className="btn" onClick={changetext}><img src={image} width="60px"  alt="apple" /></button>
       <h2 className="advice" style={{ color: isGreen ? "green" : "red" }} >{state}{isGreen} </h2>
    <div className="container">
            <video autoPlay muted loop className="video">
            <source src={video} type='video/mp4'/>
            </video>
    </div>
    </div>
)
}
export default App;