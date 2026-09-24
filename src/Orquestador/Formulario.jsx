import '../Style/Formulario.css'
import Campos from "../Componentes/Formulario/Campos";
import Boton from "../Componentes/Formulario/Boton";


const Entradas=[
    {nombre:"Titulo", tipo:"text", holder:"Titulo de la tarjeta",},
    {nombre:"Imagen", tipo:"text", holder:"Imagen",},
    {nombre:"Descripcion", tipo:"text", holder:"Descripcion",},
    {nombre:"Color", tipo:"text", holder:"Color",},
]

export default function Formulario(){
    return(
        <div className="formulario">
            <h2>Formulario</h2>
            <form action="">
                {Entradas.map((campo) => (
                    <Campos
                        key={campo.nombre}
                        etiqueta={campo.nombre}
                        nombre={campo.nombre}
                        tipo={campo.tipo}
                        holder={campo.holder}
                    />
                ))}
                <Boton texto="Enviar"/>
            </form>
        </div>
    )
}