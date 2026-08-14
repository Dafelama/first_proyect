import Avatar from "./Avatar";
import InfoUsuario from "./InfoUsuario";

const user = {
    nombre: "John Doe",
    apellido: "Smith",
    edad: 30,
};

export default function Componente1() {
    return (
        <div>
            <InfoUsuario nombre={user.nombre} apellido={user.apellido} edad={user.edad} />
            <Avatar alt={`Avatar de ${user.nombre} ${user.apellido}`} />
        </div>
    );
}
