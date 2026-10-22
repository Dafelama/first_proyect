import Tar from "./Tar" 
import Formulario from '../Orquestador/Formulario'
import Inicio from "./Inicio"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import libros from "../data.json";
import { useState } from "react";

export default function App(){
    const [tarjeta,setTarjeta] = useState(libros)
    const agregar=(nueva)=>setTarjeta((actuales)=>[...actuales,nueva])
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Tarjetas" element={<Tar tarjeta={tarjeta} />} />
                <Route path="/Formulario" element={<Formulario agregar={agregar} />} />
            </Routes>
        </BrowserRouter>
    )
}