import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Tarjeta from './Orquestador/Tarjeta'
import libros from './data.json'
import cleanCode from './assets/vegeta.jpg'
import dune from './assets/goham.jpg'
import novela1984 from './assets/future-trunks-long-hair.jpg'

const imagenes = {
  cleanCode,
  dune,
  novela1984,
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <header className='Cabecera'>
      <div className='Cabecera__Decoracion' aria-hidden='true'></div>
      <h1>Library Project</h1>
    </header>

    {
      libros.map((libro) => (
        <Tarjeta
          key={libro.id}
          titulo={libro.titulo}
          autor={libro.autor}
          descripcion={libro.descripcion}
          categoria={libro.categoria}
          rating={libro.rating}
          anio={libro.anio}
          img={imagenes[libro.imgKey]}
          pdf={libro.pdf}
        />
      ))
    }
  </StrictMode>,
)
