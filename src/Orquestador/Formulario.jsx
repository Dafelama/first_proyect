import '../Style/Formulario.css'
import Campos from "../Componentes/Formulario/Campos";
import Boton from "../Componentes/Formulario/Boton";
import Tarjeta from "../Orquestador/Tarjeta"


const Entradas=[
    {nombre:"Titulo",tipo:"text",holder:"Titulo de la tarjeta"},
    {nombre:"Imagen",tipo:"text",holder:"Imagen"},
    {nombre:"Descripcion",tipo:"text",holder:"Descripcion"},
    {nombre:"Color",tipo:"text",holder:"Color"}
]


const inicial={Titulo:'',Imagen:'', Descripcion:'',Color:'' }
export default function Formulario({datos,onCambio,onEnviar,onReset, onVolver}){
    
    const Botones=[
    {tipo:"submit", nombre:"Enviar"},
    {tipo:"button", nombre:"Volver",onClick:onVolver},
    {tipo:"reset", nombre:"Reset"}
]


    return(
        <div>
            <form className="formulario" onSubmit={onEnviar} onReset={onReset}>
                {Entradas.map((campo)=>(
                    <Campos
                        key={campo.nombre}
                        etiqueta={campo.nombre}
                        nombre={campo.nombre}
                        tipo={campo.tipo}
                        holder={campo.holder}
                        valor={datos[campo.nombre]}
                        onCambio={onCambio}
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