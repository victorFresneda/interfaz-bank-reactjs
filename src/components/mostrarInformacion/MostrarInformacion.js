


import React from 'react'
import imgUser from '../../resources/user.png'

export const MostrarInformacion = () => {

    let cliente = JSON.parse (localStorage.getItem( "cliente" ));
   

    
    console.log(cliente.findIndex(index => {
            return index
    }))


  return (
    
    <div className="m-0 vh-100 row justify-content-center align-items-center">
      <div className="card" style={{width: "22rem"}} >
          <img src={imgUser} className="card-img-top" alt="User"/>
          <div className="card-body">
            <h5 className="card-title">{cliente[0].nombre} {cliente[0].apellido}</h5>
            <p className="card-text"></p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Ciudad: {cliente[0].ciudad}</li>
            <li className="list-group-item">Pais: {cliente[0].pais}</li>
            <li className="list-group-item">Estado: Activo</li>
          </ul>
          <a href="/" className="btn btn-outline-primary mt-4 mb-4 ">Regresar</a>
      </div>
    </div>
       

  )
}
