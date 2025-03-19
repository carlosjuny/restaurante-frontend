import { useState, useEffect } from "react";
import api from "../services/api";

const useCrud = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Obtener todos los registros
  const fetchAll = async () => {
    setLoading(true);
    try {
      const response = await api.get(endpoint);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Obtener un solo registro por ID
  const fetchById = async (id) => {
    try {
      const response = await api.get(`${endpoint}/${id}`);
      return response.data;
    } catch (err) {
      setError(err);
    }
  };

  // Crear un nuevo registro
  const create = async (itemData) => {
    try {
      const response = await api.post(endpoint, itemData);
      setData([...data, response.data]);
    } catch (err) {
      setError(err);
    }
  };

  // Actualizar un registro
  const update = async (id, itemData) => {
    try {
      await api.put(`${endpoint}/${id}`, itemData);
      setData(data.map((item) => (item.id === id ? { ...item, ...itemData } : item)));
    } catch (err) {
      setError(err);
    }
  };

  // Eliminar un registro
  const remove = async (id) => {
    try {
      await api.delete(`${endpoint}/${id}`);
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchAll();
  }, [endpoint]);

  return { data, loading, error, fetchAll, fetchById, create, update, remove };
};

export default useCrud;
