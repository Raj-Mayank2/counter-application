import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [counter,setCounter]=useState(0);
  const addValue=()=>{
    setCounter(counter+1)
  }
  const remoVeValue=()=>{
    setCounter(counter-1);
  }
  return (
    <>
    <h1>React course with Mayank</h1>
    <h2>  COUNTER VALUE:{counter}</h2>
    <button 
    onClick={addValue}
    className='btn'>Add value</button>
    <button 
    onClick={remoVeValue}
    className='btn'>Remove value</button>
    <p>footer:{counter}</p>
    </>
  );
}

export default App;
