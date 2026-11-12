import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const inicial={Titulo:'',Imagen:'', Descripcion:'',Color:'' } 

export default function useFormulario({agregar}){
    
    const navigate=useNavigate()
        const [datos,setDatos]=useState(inicial)
        const cambiar=(e)=>{ //Cambia o modifica la funcion de arriba, y esa funcion queda atrapada en la variable
            setDatos({...datos,[e.target.name]:e.target.value}) //sprit no definimo el numero de parametros que vamos a pasar y ese evento lo vamos a localizar a partir del nombre
        }
        const enviar = (e)=>{
            e.preventDefault()

            
        const hayVacios = Object.values(datos).some(
            (valor) => String(valor).trim() === ""
        )

        if (hayVacios) {
            alert("Completa todos los campos antes de enviar")
            return
        }
            agregar({
                title:datos.Titulo,
                img:datos.Imagen,
                descripcion:datos.Descripcion,
                color:datos.Color
    
            })
            navigate('/Tarjetas')
        }
    return {
        datos,
        onCambio: cambiar,
        onEnviar: enviar,
        onReset: ()=>setDatos(inicial),
        onVolver: ()=>navigate('/Tarjetas')
    }
}
        
