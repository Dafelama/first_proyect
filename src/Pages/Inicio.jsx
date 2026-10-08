import { useNavigate } from 'react-router-dom'
import ABC from '../assets/Home.jpg'
import Efecto from '../Home/Efecto'

export default function Inicio(){
    const llevame = useNavigate();
    return(
        <div
            style={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center',
                minHeight:'100vh',
                background:'linear-gradient(135deg, #f3e8ff 0%, #e0f2fe 100%)',
                color:'#2d1b69',
                padding:'2rem',
                boxSizing:'border-box'
            }}
        >
            <h1 style={{ marginBottom:'1.5rem' }}>Bienvenido a Library Project</h1>
            <Efecto
                src={ABC}
                onFin={() => llevame('/Tarjetas')}
            />
        </div>
    )
}