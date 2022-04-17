

import React from 'react'

export const IngresarDinero = () => {
  return (
    
    <div className="m-0 vh-100 row justify-content-center align-items-center">

        <div class="input-group">
          <input type="text" class="form-control" placeholder="Ingresa la cantidad" aria-label="Recipient's username with two button addons"/>
          <a
            // href="/"
            className="btn btn-outline-primary"
            type="reset"
            href="/"
          >
            Ingresar
          </a>
          <a
            href="/"
            className="btn btn-outline-primary"
            type="reset"
          >
            Regresar
          </a>
        </div>

    </div>
  )
}
