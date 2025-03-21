import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ onClose }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulación de autenticación (debería ser una llamada a la API)
    const userData = { username: credentials.username, role: "admin" };

    // Guardar en localStorage (o donde estés manejando la autenticación)
    storage.set("authUser", userData);

    // Cerrar la modal
    onClose();

    // Redirigir a una página protegida
    navigate("/admin/mesas");
  };

  return (
    <div className="modal">
      <h2>Iniciar Sesión</h2>
      <input
        type="text"
        placeholder="Usuario"
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Contraseña"
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button onClick={handleLogin}>Ingresar</button>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default LoginModal;
