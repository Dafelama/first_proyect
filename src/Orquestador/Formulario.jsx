import '../Style/Formulario.css'
import Campos from "../Componentes/Formulario/Campos";
import Boton from "../Componentes/Formulario/Boton";

const Entradas = [
    { nombre: "Titulo", tipo: "text", holder: "Escribe el título del libro" },
    { nombre: "Autor", tipo: "text", holder: "Nombre del autor" },
    { nombre: "Año", tipo: "number", holder: "Año de publicación" },
    { nombre: "Opinion/review", tipo: "textarea", holder: "Escribe tu opinión o reseña" }
];

export default function Formulario() {
    return (
        <div className="formulario">
            <h2>Reseña Form</h2>
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
                <Boton texto="Enviar" />
            </form>
        </div>
    )
}