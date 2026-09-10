import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Tarjeta from './Orquestador/Tarjeta'
import Form from './Componentes/Form'
import libros from './data.json'
import cleanCode from './assets/vegeta.jpg'
import dune from './assets/goham.jpg'
import novela1984 from './assets/future-trunks-long-hair.jpg'
import habitosAtomicos from './assets/habitosAtomicos.jpg'
import SiloCreesloCreas from './assets/SiLoCreesLoCreas.jpg'

const imagenes = {
  cleanCode,
  dune,
  novela1984,
  habitosAtomicos,
  SiloCreesloCreas,
}

createRoot(document.getElementById('root')).render( 
  <StrictMode>
    <header className='LibraryHeader'>
      <h1>Library Project</h1>
      <Form />
    </header>

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
