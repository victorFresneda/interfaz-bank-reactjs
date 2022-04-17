
import { useState } from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom";
import { CambiarClave } from "../components/cambiarClave/CambiarClave";

import { Datos } from '../components/datos/Datos'
import { DatoSinSaldo } from '../components/datossinsaldo/DatoSinSaldo';
import { Home } from '../components/home/Home'
import { IngresarDinero } from "../components/ingresarDinero/IngresarDinero";
import { MostrarInformacion } from "../components/mostrarInformacion/MostrarInformacion";
import { RetirarDinero } from "../components/retirarDinero/RetirarDinero";
import { VerSaldo } from "../components/verSaldo/VerSaldo";

export const AppRouter = () => {

  const [nombre, guardarNombre] = useState("");
  const [apellido, guardarApellido] = useState("")
  const [ciudad, guardarCiudad] = useState("")
  const [pais, guardarPais] = useState("")
  const [terminos, guardarTerminos] = useState("")
  const [saldo, guardarSaldo] = useState("")

  return (
    <BrowserRouter>

        <h1>{terminos}</h1>
        <Routes>
        
            <Route path="/" element={<Home />}/>
            <Route path="datos" element={<Datos nombre={nombre}
                                                    guardarNombre={guardarNombre}
                                                    apellido={apellido}
                                                    guardarApellido={guardarApellido}
                                                    ciudad={ciudad}
                                                    guardarCiudad={guardarCiudad}
                                                    pais={pais}
                                                    guardarPais={guardarPais}
                                                    terminos={terminos}
                                                    guardarTerminos={guardarTerminos}
                                                    saldo={saldo}
                                                    guardarSaldo={guardarSaldo}
                                                    />}/>
            <Route path="datossinsaldo" element={<DatoSinSaldo 
                                                    nombre={nombre}
                                                    guardarNombre={guardarNombre}
                                                    apellido={apellido}
                                                    guardarApellido={guardarApellido}
                                                    ciudad={ciudad}
                                                    guardarCiudad={guardarCiudad}
                                                    pais={pais}
                                                    guardarPais={guardarPais}
                                                    terminos={terminos}
                                                    guardarTerminos={guardarTerminos}
                                                />}/>
            <Route path="mostrarInformacion" element={<MostrarInformacion 
                                                    nombre={nombre}
                                                    apellido={apellido}
                                                    ciudad={ciudad}
                                                    pais={pais}
                                                    terminos={terminos}
                                                />}/>
            <Route path="versaldo" element={<VerSaldo />}/>
            <Route path="ingresarDinero" element={<IngresarDinero />}/>
            <Route path="retirarDinero" element={<RetirarDinero />}/>
            <Route path="cambiarClave" element={<CambiarClave />}/>


            
           

        </Routes>

    </BrowserRouter>
    
    
  )
}
