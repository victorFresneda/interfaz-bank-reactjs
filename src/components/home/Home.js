import React from 'react'

export const Home = () => {
  return (
    <div className="m-0 vh-100 row justify-content-center align-items-center">
      <div className="row g-3">
        <div className="col-md-6">
          <a href="/datossinsaldo" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Crear cuenta vacia</h5>
            </div>
            <p className="mb-1">Crea una objeto cuenta con saldo cero</p>
          </a>
        </div>

        <div className="col-md-6">
          <a
            href="/datos"
            className="list-group-item list-group-item-action"
            aria-current="true"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Crea una cuenta con saldo inicial</h5>
            </div>
            <p className="mb-1">
              Solicita una cantidad y crea un objeto con saldo inicial
            </p>
          </a>
        </div>

        <div className="col-md-6">
          <a
            href="/ingresarDinero"
            className="list-group-item list-group-item-action"
            aria-current="true"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Ingresa dinero</h5>
            </div>
            <p className="mb-1">
              Se solicita una cantidad y la ingresa en el obeto creado
            </p>
          </a>
        </div>

        <div className="col-md-6">
          <a
            href="/retirarDinero"
            className="list-group-item list-group-item-action"
            aria-current="true"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Retirar dinero</h5>
            </div>
            <p className="mb-1">
              Solicita una cantidad y la extrae de el objeto creado
            </p>
          </a>
        </div>

        <div className="col-md-6">
          <a
            href="/cambiarClave"
            className="list-group-item list-group-item-action"
            aria-current="true"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Cambiar clave</h5>
            </div>
            <p className="mb-1 fs-6">
              Permite cambiar clave, debe por lo menos 8
              caracteres
            </p>
          </a>
        </div>
        <div className="col-md-6">
          <a
            href="/versaldo"
            className="list-group-item list-group-item-action"
            aria-current="true"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Ver saldo</h5>
            </div>
            <p className="mb-1">Muestra el saldo del usuario</p>
          </a>
        </div>

        <div className="col-md-6">
          <a
            href="/mostrarInformacion"
            className="list-group-item list-group-item-action"
            aria-current="true"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">Mostrar informacion</h5>
            </div>
            <p className="mb-1">Muestra toda la informacion de la cuenta</p>
          </a>
        </div>

        <div className="col-md-6 mb-4">
          <a
            href="#"
            className="list-group-item list-group-item-action"
            aria-current="true"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">EXIT</h5>
            </div>
            <p className="mb-1">Finaliza el programa</p>
          </a>
        </div>
      </div>
    </div>
  )
}
