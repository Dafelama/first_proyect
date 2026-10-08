import { Link } from "react-router-dom";

export default function Boton2({ ruta, imagen, texto = "Click aquí" }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '20px', flexWrap: 'wrap', textAlign: 'center' }}>
            <p style={{ margin: 0, fontSize: '1rem', color: '#2d1b69' }}>
                ¿Deseas dejar alguna reseña de algun libro que hayas leido?
            </p>
            <Link to={ruta} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#4c1d95', fontWeight: 'bold', textDecoration: 'none', fontSize: '1.1rem' }}>
                {texto} <span aria-hidden="true">→</span>
                <img src={imagen} alt="" style={{ width: '200px', height: '200px', borderRadius: '10px' }} />
            </Link>
        </div>
    )
}