import libros from "../data.json";
import { useState } from "react";

export default function useTarjetas(){
    const [tarjeta,setTarjeta] = useState(libros)
    const agregar=(nueva)=>setTarjeta((actuales)=>[...actuales,nueva])
    return {tarjeta,agregar}
}