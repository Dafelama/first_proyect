export default function Campos ({etiqueta,nombre,tipo,holder,valor,onCambio}){
    return(
        <div >
            <label htmlFor={nombre}>{etiqueta}</label>
            <input
                type={tipo}
                id={nombre}
                name={nombre}
                placeholder={holder}
                value={valor}
                onChange={onCambio}
            />
        </div>
    )
}
