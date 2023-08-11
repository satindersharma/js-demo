

import {useState} from 'react'
import "./App.css"
import "./CC.css"
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Form from './Form';
import styles from "./App.module.css"

  

function App() {

  // const counter = 1;

  const [counter,setCounter] = useState(1)// react hooks
  

  // useEffect(()=>{
  //   console.log('useEffect on component mount time')
  // },[])


  // console.log('counter',counter)
  
  return (
    <BrowserRouter>
    <div className="App">
     
      
      
      <h1>App</h1>
      <h2>hey user</h2>


      <h2>{counter}</h2>
      <button className='btn' onClick={()=>setCounter(counter+1)}>Increase</button>
      <button className='btn btn-warning' onClick={()=>setCounter(counter-1)}>Decrease</button>
      <button className={styles.btn_info}>SUbmit</button>
      <button className={`btn ${styles.btn_info}`}>Cancel</button>
      <img src="images/jman.png" alt="" className='img'/>
      <p> this is footer</p>
   
     <Routes>
     
     <Route path='/Form' element={<Form/>} />
     
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
