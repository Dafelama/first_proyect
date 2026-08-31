import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Tarjeta from './Orquestador/Tarjeta'
import Cafe from './data.json'
import trunks from './assets/future-trunks-long-hair.jpg'
import gohan from './assets/goham.jpg'
import vegeta from './assets/vegeta.jpg'

const imagenes = {
  trunks,
  gohan,
  vegeta,
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {
      Cafe.map((chocolate) => (
        <Tarjeta
          key={chocolate.id}
          title={chocolate.title}
          descripcion={chocolate.descripcion}
          img={imagenes[chocolate.imgKey] || chocolate.img}
          color={chocolate.color}
        />
      ))
    }
  </StrictMode>,
)
