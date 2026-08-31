import '../Style/Tarjeta.css'
import Titulo from '../Componentes/Titulo'
import Imagen from '../Componentes/Imagen'
import Descripcion from '../Componentes/Descripcion'

export default function Tarjeta({ title, descripcion, img, color }) {
    return (
        <div className='CentraC'>
            <div className='Centrar' style={{ backgroundColor: color }}>
                <Imagen
                    img={img}
                />
                <div className='Orde'>
                    <Titulo
                        title={title}
                    />
                    <Descripcion
                        descripcion={descripcion}
                    />
                </div>
            </div>
        </div>
    )
}