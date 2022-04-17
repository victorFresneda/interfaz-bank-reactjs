


import React from 'react'

export const CambiarClave = () => {
  return (

    <div className="m-0 vh-100 row justify-content-center align-items-center">

        <form className='row'>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Ingresa tu contraseña actual</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">Escribe exactamente tu contraseña actual.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Ingresa tu nueva contraseña</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
            <div id="emailHelp" className="form-text">Debe tener entre 8 y 20 caracteres.</div>

          </div>
          
          <div className="col-5 ms-4">
          <a
            className="btn btn-outline-primary mt-4 mb-4"
            type="reset"
            // onClick={capturar}
          >
            Cambiar
          </a>
        </div>
        <div className="col-5 ms-4">
          <a
            href="/"
            className="btn btn-outline-primary mt-4 mb-4"
            type="reset"
          >
            Regresar
          </a>
        </div>
        </form>

    </div>
  )
}
