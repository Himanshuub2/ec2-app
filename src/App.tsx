import './App.css'
import img from './assets/myimage.jpeg'
import axios from "axios";
import { useEffect, useState } from 'react';

function App() {
const [name,setName] = useState([]);
const [pName,setPName] = useState("");


useEffect(()=>{
  async function getDetails(){
    const backendURL = 'http://localhost:4000/api';
    const res1 = axios.get(backendURL)
    const res2 = axios.post(`${backendURL}/user`,{name:"himanshu"}) 
    const res = await Promise.all([res1,res2])
    console.log(res);
    setName(res[0].data.details)
    setPName(res[1].data.newName)

  }
  getDetails();
},[])

  return (
    <>
    <div>
      <img src={img} alt="my image" width={300} height={300} /> 
      <br/>
      <h1>Hello All</h1>
      {name.map(n=><h1>{n}</h1>)}
      <div style={{color:"red"}}>
      {pName}
      </div>
      </div>
    </>
  )
}

export default App
