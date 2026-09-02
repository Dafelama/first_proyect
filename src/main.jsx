import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Tarjeta from './Orquestador/Tarjeta'
import libros from './data.json'
import cleanCode from './assets/vegeta.jpg'
import dune from './assets/goham.jpg'
import novela1984 from './assets/future-trunks-long-hair.jpg'
import habitosAtomicos from './assets/habitosAtomicos.jpg'

const imagenes = {
  cleanCode,
  dune,
  novela1984,
  habitosAtomicos,
}

createRoot(document.getElementById('root')).render( 
  <StrictMode>
    <h1>Library Project</h1>

    {
      libros.map((libro) => (
        <Tarjeta
          key={libro.id}
          title={libro.title}
          descripcion={libro.descripcion}
          img={imagenes[libro.imgKey] || libro.img}
          color={libro.color}
        />
      ))
    }
  </StrictMode>,
)
