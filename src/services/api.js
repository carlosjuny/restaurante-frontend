import axios from "axios";

const API_URL = "http://127.0.0.1:8000"; 

const api = axios.create({
  baseURL: API_URL + "/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Necesario para Sanctum
});

// Obtener el token CSRF
export const getCsrfToken = () => axios.get(`${API_URL}/sanctum/csrf-cookie`, { withCredentials: true });

// Autenticación
export const login = async (credentials) => {
  await getCsrfToken(); // Asegura que Sanctum tiene la cookie CSRF

  return api.post('/login', credentials)
    .then(response => {
      console.log('Autenticación exitosa:', response.data);
      
      // Guarda el usuario autenticado en localStorage
      localStorage.setItem("authUser", JSON.stringify(response.data.user));

      return response.data;
    })
    .catch(error => {
      console.error('Error en login:', error.response?.data || error.message);
      throw error;
    });
};

export default api;
