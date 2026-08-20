import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Tarjeta from './Componentes/Tarjeta'
import Ima from './assets/future-trunks-long-hair.jpg'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tarjeta 
    title="Trunks"
    descripcion="Trunks es un personaje de la serie de anime y manga Dragon Ball. Es el hijo de Vegeta y Bulma, y es conocido por su cabello morado y su habilidad para viajar en el tiempo. Trunks es un guerrero valiente y poderoso que lucha para proteger a sus amigos y familiares."
    img={Ima}
    color="blueviolet"
    />
    


  </StrictMode>,
)
