
import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import './App.css';

function Archives() {

  const [archives,setArchives] =useState([{}])

  useEffect( ()=> {
    const fetchAll = async ()=>{
        const res =await axios.get("/archives")
        setArchives(res.data);
        console.log(res)
    }
    fetchAll();
  },[]);

    
  const onDelete= async (ID)=>{
    await axios.delete("/archives/"+ID)
    window.location.reload()
  };

  const onUpdate= async (id)=>{
    await axios.update("/archives"+id)
    window.location.reload()
  };
  return (
    <div>
       <h1>Liste des Archives</h1>
       <div className='listArchive' >
    
            {archives.map((archive)=>(
                <div key={archive.ID}>
                    <p>Nom: {archive.Nom}  </p>
                    <p>type :{archive.type}  </p>
                    <p>Quantite : {archive.quantite}  </p>
                    <p>Email: {archive.Email}  </p>
            <button onClick={(()=>onDelete(archive.ID))}>Delete</button>
            <button><Link to={'/update/${archive.ID}'}>Update</Link></button>
            </div>
            ))}
       
        
       </div>
       <button className='addButton'><Link to="/add">Add new archive</Link></button>
    </div>
  );
}

export default Archives;
