import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [post,SetPost] = useState([])




  useEffect(()=>{
    SetPost([{id:1,name:"Rohit"}, {id:2,name:"Satinder"},{id:3,name:"Ajay"}])
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => SetPost(json))

  },[])

  return (
    <div className="App">
      <div className="container m-4 p-4">

      <div className="row">

      <ul className="list-group">
        {/*  react-dom.development.js:86
Warning: Each child in a list should have a unique "key" prop */}
        {post.map((p)=><li key={p.id} className="list-group-item">{p.id} | {p.title}</li>)}
  
</ul>
      </div>
      </div>


    </div>
  );
}

export default App;
