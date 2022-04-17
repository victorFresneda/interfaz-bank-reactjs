import React from "react";

export const Datos = ({
  nombre,
  guardarNombre,
  apellido,
  guardarApellido,
  ciudad,
  guardarCiudad,
  pais,
  guardarPais,
  terminos,
  guardarTerminos,
  saldo,
  guardarSaldo
}) => {

  // Se crea una funcion con un constructor de un objeto
  function capturar() {
    function Cliente(nombre, apedillo, ciudad, pais, terminos, saldo) {
      this.nombre = nombre;
      this.apellido = apedillo;
      this.ciudad = ciudad;
      this.pais = pais;
      this.terminos = terminos;
      this.saldo = saldo;
    }
    // Se crea una instancia del objeto cliente
    var nuevoCliente = new Cliente(nombre, apellido, ciudad, pais, terminos, saldo);

    // Funcion para agregar el nuevo cliente a la DB en el localStorage
    agregarDB(nuevoCliente);
  }

  function agregarDB(nuevoCliente) {
    var baseDatos = JSON.parse(localStorage.getItem("cliente")) || [];
    baseDatos.push(nuevoCliente);
    localStorage.setItem("cliente", JSON.stringify(baseDatos));
  }

  return (
    <div className="container full-screen d-flex justify-content-center align-items-center">
      <form className="row g-3 mt-5">
        <div className="col-md-6">
          <label htmlFor="validationDefault01" className="form-label">
            First name
          </label>
          <input
            onChange={(e) => guardarNombre(e.target.value)}
            type="text"
            className="form-control"
            id="validationDefault01"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="validationDefault02" className="form-label">
            Last name
          </label>
          <input
            onChange={(e) => guardarApellido(e.target.value)}
            type="text"
            className="form-control"
            id="validationDefault02"
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="validationDefault03" className="form-label">
            City
          </label>
          <input
            onChange={(e) => guardarCiudad(e.target.value)}
            type="text"
            className="form-control"
            id="validationDefault03"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="validationDefault04" className="form-label">
            Country
          </label>
          <select
            onChange={(e) => guardarPais(e.target.value)}
            className="form-select"
            id="validationDefault04"
            required
          >
            <option selected disabled value="">
              Choose...
            </option>
            <option>Argentina</option>
            <option>Bolivia</option>
            <option>Brasil</option>
            <option>Chile</option>
            <option>Colombia</option>
            <option>Ecuador</option>
            <option>Paraguay</option>
            <option>Perú</option>
            <option>Uruguay</option>
            <option>Venezuela</option>
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="validationDefault03" className="form-label">
            saldo
          </label>
          <input
            onChange={(e) => guardarSaldo(e.target.value)}
            type="text"
            className="form-control"
            id="validationDefault03"
            required
          />
        </div>

        <div className="col-12">
          <div className="form-check">
            <input
              onChange={(e) => guardarTerminos(e.target.value)}
              className="form-check-input"
              type="checkbox"
              id="invalidCheck2"
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div className="col-5 ms-4">
          <a
            className="btn btn-outline-primary mt-4 mb-4"
            type="reset"
            onClick={capturar}
            href="/"

          >
            Guardar
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
  );
};
