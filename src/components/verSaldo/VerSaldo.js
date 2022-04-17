


import React from 'react'

export const VerSaldo = () => {

    let cliente = JSON.parse (localStorage.getItem( "cliente" ));

  return (

    

      
    //   <div className="m-0 vh-100 row justify-content-center align-items-center">
    //     <div className="position-relative">
    //         <div className="position-absolute top-50 start-50 translate-middle">
    //             <h3>Saldo: <span className="badge bg-secondary ">{cliente[0].saldo}</span></h3>
    //             <a href="/" className="btn btn-primary mt-4 mb-4 mx-4 col-9">Regresar</a>
    //         </div>
    //     </div>
    // </div>
        <div className=" vh-100 row justify-content-center align-items-center">
            <div class="card text-center">
                <div class="card-header">
                  !Hola¡ {cliente[0].nombre} este es tu saldo actual
                    </div>
                    <div class="card-body">
                      <h2 class="card-title">Saldo</h2>
                      <p class="card-text">{cliente[0].saldo} $</p>
                      <a href="/" class="btn btn-outline-primary">Regresar</a>
                    </div>
                    <div class="card-footer text-muted">
                </div>
            </div>
        </div> 
            
)
}


            

      
