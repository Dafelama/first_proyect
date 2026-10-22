export default function Boton({ tipo = "button", nombre, onClick }) {
    return(
        <button
            className="boton"
            type={tipo}
            onClick={onClick}
        >
            {nombre}
        </button>
    );
}
