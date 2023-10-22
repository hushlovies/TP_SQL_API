
// import React,{useEffect,useState} from 'react';
import React, { useState } from 'react';
import './App.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';



function Update() {

  const [getArchive, setArchive] = useState([{
    Nom: "",
    type: "",
    quantite: "",
    Email: "",
  }])


  const nav = useNavigate();
  const location = useLocation();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setArchive({
      ...getArchive,
      [name]: value,
    });
  };
const arch=location.pathname.split("/")[2];
  const changeClick = async (event) => {
    event.preventDefault()
    await axios.put("/archives/"+arch,getArchive)
    nav("/")
    console.log("success")
  };

  return (
    <div className='form'>
      <h1>Update an archive</h1>
      <input type='text' placeholder='nom' value={setArchive.Nom} onChange={handleChange} name='Nom' />
      <input type='text' placeholder='type' value={setArchive.type} onChange={handleChange} name='type' />
      <input type='text' placeholder='quantite' value={setArchive.quantite} onChange={handleChange} name='quantite' />
      <input type='text' placeholder='email' value={setArchive.Email} onChange={handleChange} name='Email' />
      <button onClick={changeClick}>Update</button>
    </div>
  );
}

export default Update;
