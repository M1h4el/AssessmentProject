const API_URL = 'http://localhost:3000'; // Dirección del backend

export const fetchData = async (endpoint) => {
  const res = await fetch(`${API_URL}/${endpoint}`);
  if (!res.ok) throw new Error('Error al obtener datos');
  return await res.json();
};