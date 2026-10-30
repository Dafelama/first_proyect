import Tar from "./Tar" 
import Inicio from "./Inicio"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import libros from "../data.json";
import { useState } from "react";
import useTarjetas from "../Hook/useTarjetas";
import FormularioPage from "../Pages/FormularioPage";

export default function App(){
    const {tarjeta,agregar}=useTarjetas(libros)
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Tarjetas" element={<Tar tarjeta={tarjeta} />} />
                <Route path="/Formulario" element={<FormularioPage agregar={agregar} />} />
            </Routes>
        </BrowserRouter>
    )
}