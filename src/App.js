import React from 'react';
import './App.css';

function App() {
  let [counter,updateCounter] = React.useState(0)
  let [isWinter, setWeather] = React.useState(true)
  
  return (
    <div className= {`box ${isWinter ? "winter" : "summer"}`}>

      <h1> It is {isWinter === true? "Winter":"summer"} </h1>
      <br/>
      
      <h1> The temperature is {counter}  </h1>

    <button onClick = {()=> updateCounter(++counter) } > increase temp </button>
    
    <button onClick = {()=> updateCounter(--counter) } > decrease temp </button>
      
    <button onClick = {()=> setWeather(!isWinter) } > Change Weather </button>

    </div>
  );
}

export default App;
