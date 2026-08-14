import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Componente1 from './Componentes/Componente1'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Componente1 />
  </StrictMode>,
)
