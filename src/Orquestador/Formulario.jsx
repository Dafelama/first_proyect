import '../Style/Formulario.css'
import Campos from "../Componentes/Formulario/Campos";
import Boton from "../Componentes/Formulario/Boton";
import Tarjeta from "../Orquestador/Tarjeta"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Entradas=[
    {nombre:"Titulo",tipo:"text",holder:"Titulo de la tarjeta"},
    {nombre:"Imagen",tipo:"text",holder:"Imagen"},
    {nombre:"Descripcion",tipo:"text",holder:"Descripcion"},
    {nombre:"Color",tipo:"text",holder:"Color"}
]


const inicial={Titulo:'',Imagen:'', Descripcion:'',Color:'' }
export default function Formulario({agregar}){
    const navigate=useNavigate()
    const [datos,setDatos]=useState(inicial)
    const cambiar=(e)=>{ //Cambia o modifica la funcion de arriba, y esa funcion queda atrapada en la variable
        setDatos({...datos,[e.target.name]:e.target.value}) //sprit no definimo el numero de parametros que vamos a pasar y ese evento lo vamos a localizar a partir del nombre
    }
    const enviar = (e)=>{
        e.preventDefault()
        agregar({
            title:datos.Titulo,
            img:datos.Imagen,
            descripcion:datos.Descripcion,
            color:datos.Color

        })
    }
    const Botones=[
    {tipo:"submit", nombre:"Enviar"},
    {tipo:"button", nombre:"Volver",onClick:()=>navigate('/Tarjetas')},
    {tipo:"reset", nombre:"Reset"}
]


    return(
        <div>
            <form className="formulario" onSubmit={enviar} onReset={()=>setDatos(inicial)}>
                {Entradas.map((campo)=>(
                    <Campos
                        key={campo.nombre}
                        etiqueta={campo.nombre}
                        nombre={campo.nombre}
                        tipo={campo.tipo}
                        holder={campo.holder}
                        valor={datos[campo.nombre]}
                        onCambio={cambiar}
                    />
                ))}
                {Botones.map((boton)=>(
                        <Boton
                        key={boton.nombre}
                        tipo={boton.tipo}
                        nombre={boton.nombre}
                        onClick={boton.onClick}
                        />
                    ))}
            </form>
            <Tarjeta
                title={datos.Titulo}
                descripcion={datos.Descripcion}
                img={datos.Imagen}
                color={datos.Color}
            />

        </div>
    )
}