import api from "./api";

const MesasService = {
  getAll: async () => {
    try {
      const response = await api.get("/mesas"); // GET api/mesas
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const response = await api.get(`/mesas/${id}`); // GET api/mesas/{mesa}
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  create: async (mesaData) => {
    try {
      const response = await api.post("/mesas", mesaData); // POST api/mesas
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  update: async (id, mesaData) => {
    try {
      const response = await api.put(`/mesas/${id}`, mesaData); // PUT api/mesas/{mesa}
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const response = await api.delete(`/mesas/${id}`); // DELETE api/mesas/{mesa}
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default MesasService;
