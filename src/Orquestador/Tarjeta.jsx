import '../Style/Tarjeta.css'
import Titulo from '../Componentes/Titulo'
import Imagen from '../Componentes/Imagen'
import Descripcion from '../Componentes/Descripcion'

export default function Tarjeta({ titulo, autor, descripcion, categoria, rating, anio, img, pdf }) {
    return (
        <div className='CentraC'>
            <div className='Tarjeta'>
                <Imagen img={img} />

                <div className='Tarjeta__Info'>
                    <Titulo title={titulo} />
                    <p className='Tarjeta__Autor'>{autor}</p>

                    <div className='Tarjeta__Meta'>
                        <span>{categoria}</span>
                        <span>⭐ {rating}</span>
                        <span>{anio}</span>
                    </div>

                    <Descripcion descripcion={descripcion} />

                    <a
                        className='Tarjeta__Boton'
                        href={pdf}
                        target='_blank'
                        rel='noreferrer'
                    >
                        Leer / Descargar PDF
                    </a>
                </div>
            </div>
        </div>
    )
}