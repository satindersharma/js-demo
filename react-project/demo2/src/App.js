import logo from './logo.svg';

import {useState, useEffect} from 'react'
import './App.css';

function App() {

  // const counter = 1;

  const [counter,setCounter] = useState(1)// react hooks
  

  // useEffect(()=>{
  //   console.log('useEffect on component mount time')
  // },[])


  // console.log('counter',counter)
  
  useEffect(()=>{
    console.log('useEffect will run on every change time. counter=>',counter)
  },[counter])

  return (
    <div className="App">
      <h1>App</h1>
      <h2>{counter}</h2>
      <button onClick={()=>setCounter(counter+1)}>Increase</button>
      <button onClick={()=>setCounter(counter-1)}>Decrease</button>
    </div>
  );
}

export default App;
