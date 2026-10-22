import Tarjeta from "../Orquestador/Tarjeta";
import Boton2 from '../Componentes/Tarjetas/Boton2';
import B from '../assets/B.jpg';

export default function Tar({ tarjeta }) {
  return (
    <>
      <header className="LibraryHeader">
        <h1>Library Project</h1>
      </header>

      <div>
        {tarjeta.map((libro) => (
          <Tarjeta
            key={libro.id}
            title={libro.title}
            descripcion={libro.descripcion}
            img={libro.img}
            color={libro.color}
          />
        ))}
        <Boton2 ruta="/Formulario" imagen={B} texto="Click aquí" />
      </div>
    </>
  );
}