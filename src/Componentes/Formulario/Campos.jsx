export default function Campos({etiqueta, nombre, tipo, holder}) {
    return (
        <div className="campo">
            <label htmlFor={(nombre)}>{(etiqueta)}</label>
            <input type={(tipo)} id={(nombre)} name={(nombre)} placeholder={(holder)}/>
        </div>
    )
}