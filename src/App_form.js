import { useEffect, useState } from "react";
import React from "react";
import image from "./apple.jpg";
import video from "./ball.mp4";
import './App.css';

function App(){
    const [state, setState] = useState('');
    const [isGreen, setIsGreen] = useState(true);


    const changetext = async ()=>{
    const responce = await fetch('http://www.boredapi.com/api/activity/');
    const data = await responce.json();
    setState(data.activity)
}
useEffect(()=>{
    changetext()
}, [])



return(
    <div className="App">
        <h1 className="header">If you're bored, click on the apple and see what you can do</h1>
    <form 
       > 
       <button className="btn"><img src={image} width="60px" onClick={() => setIsGreen(!isGreen) } alt="apple" /></button>
       <h2 className="advice" style={{ color: isGreen ? "green" : "red" }} >{state} </h2>
    </form>
    <div className="container">
            <video autoPlay muted loop className="video">
            <source src={video} type='video/mp4'/>
            </video>
    </div>
    </div>
)

}
export default App;