export default function Campos({ etiqueta, nombre, tipo, holder }) {
    if (tipo === 'textarea') {
        return (
            <div className="campo">
                <label htmlFor={nombre}>{etiqueta}</label>
                <textarea id={nombre} name={nombre} placeholder={holder} rows="5" />
            </div>
        )
    }

    return (
        <div className="campo">
            <label htmlFor={nombre}>{etiqueta}</label>
            <input type={tipo} id={nombre} name={nombre} placeholder={holder} />
        </div>
    )
}