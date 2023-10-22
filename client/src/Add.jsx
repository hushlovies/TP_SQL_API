
// import React,{useEffect,useState} from 'react';
import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function Add() {

  const [getArchive, setArchive] = useState([{
    Nom: "",
    type: "",
    quantite: "",
    Email: "",
  }])


  const nav = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setArchive({
      ...getArchive,
      [name]: value,
    });
  };

  const changeClick = async (event) => {
    event.preventDefault()
    await axios.post("/archives",getArchive)
    nav("/")
    console.log("success")
  };

  return (
    <div className='form card'>
      <h1>Add an archive</h1>
      <input type='text' placeholder='nom' value={setArchive.Nom} onChange={handleChange} name='Nom' />
      <input type='text' placeholder='type' value={setArchive.type} onChange={handleChange} name='type' />
      <input type='text' placeholder='quantite' value={setArchive.quantite} onChange={handleChange} name='quantite' />
      <input type='text' placeholder='email' value={setArchive.Email} onChange={handleChange} name='Email' />
      <button onClick={changeClick}>Add</button>
    </div>
  );
}

export default Add;
