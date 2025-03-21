import axios from "axios";

const API_URL = "http://127.0.0.1:8000"; // Usa 127.0.0.1 en lugar de localhost
const api = axios.create({
  baseURL: `${API_URL}/api`, // Define la base de la API
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json', // Asegurar respuestas JSON
  },
  withCredentials: true, // Habilita credenciales para cookies CSRF
});

// ✅ Obtener el token CSRF antes de enviar solicitudes autenticadas
export const getCsrfToken = async () => {
  try {
    const response = await axios.get(`${API_URL}/sanctum/csrf-cookie`, { withCredentials: true });
    console.log("CSRF Token recibido:", response);
  } catch (error) {
    console.error("Error obteniendo CSRF Token:", error);
  }
};

// ✅ Función para hacer login
export const login = async (credentials) => {
  try {
    await getCsrfToken(); // Asegura que se obtiene el CSRF Token antes de enviar credenciales
    const response = await api.post("login", credentials);
    return response.data;
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
};

export default api;
