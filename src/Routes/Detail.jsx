import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  const params = useParams();
  const dentisUrl = `https://jsonplaceholder.typicode.com/users/${params.id}`
  const {theme} = useContext(ContextGlobal);
  const [userData, setUserData] = useState({
    nombre: "",
    email:"",
    phone:"",
    website:"",
})

  useEffect(()=>{
    axios(dentisUrl)
    .then(data=> {const dataUser = data.data;
    setUserData({
      nombre:dataUser.nombre,
      email: dataUser.email,
      phone: dataUser.phone,
      website: dataUser.website,
    })
    console.log(dataUser);
  })
    } , [])
    const addFav = ()=>{
      
    }
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div className="main">

    <div className='details'>
      <h1>Detail Dentist {params?.id} </h1>

      
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      <div className="card" >
      <img src= "../images/doctor.jpg" className="docImage"/>
      <p>{userData.nombre}</p>
      <p>{userData.email}</p>
      <p>{userData.phone}</p>
      <p>{userData.website}</p>
      { }
      </div>
      </div>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail