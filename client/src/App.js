
// import React,{useEffect,useState} from 'react';
import React,{useEffect,useState} from 'react';
import './App.css';

function App() {

  const [getData,setData] =useState([{}])

  useEffect( ()=> {
    fetch("/archives").then(
      response => response.json()
    ).then(
      data =>{
        console.log(data)
        setData(data)
      }
    )
  },[])
  return (
    <div>
      
        <h1>testons</h1>
        {getData.map((archive,i)=>{
          return <p key={i}>{archive.type}</p>
        })}


    </div>
    
  );
}

export default App;
