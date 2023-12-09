import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/cars';

export const getAllCars = async (filters = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}`, { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
};

export const getCarById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching car with ID ${id}:`, error);
    throw error;
  }
};
export const searchCars = async (search) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        search,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching searched cars:', error);
    throw error;
  }
};

export const sortCars = async (sortBy, sortOrder) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        sortBy,
        sortOrder,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching sorted cars:', error);
    throw error;
  }
};




