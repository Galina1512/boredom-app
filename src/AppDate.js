import { useEffect, useState } from "react";
import React from "react";
import image from "./calendar-removebg.png"
import './App.css';

function App(){
    const [advice, setAdvice] = useState('');
    const [search, setSearch] = useState();
    const [den, setDen] = useState();

useEffect(async ()=>{
    const responce = await fetch('http://www.boredapi.com/api/activity/');
    const data = await responce.json();
    setAdvice(data.activity)
    // console.log(data.activity)
}, [])

const yourSearch = (e) =>{
    setSearch(e.target.value);
    console.log(e.target.value)
  }

  const finalSearch = (e) =>{
      e.preventDefault();
      setDen (search);
      setAdvice(advice);
  }
  
  const Show = ()=>{
   const ddd = search.getDate(); 
    console.log(ddd);
  }
  
  
  return(
    <div className="App">
        <p>Enter the date, click on the calindar and get a job for the day</p>
       <form className="App" onSubmit={finalSearch}> 
       <input  onChange={yourSearch} type="date" name="calendar"/>
       <div className="calendar">
       <button className="btn" ><img src={image} onClick={finalSearch}/></button>
       <div>
           <h5>{den}</h5>
       </div>
       </div>
       <h2>{advice} </h2>
        </form>
        </div>
);
  }

export default App;