const API_URL = 'http://localhost:8082';

export const fetchData = async (endpoint, method, body = null) => {
  const token = localStorage.getItem('jwt') ?? '';

  const headers = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const requestOptions = {
    method: method,
    headers: headers,
  };

  if (body) {
    requestOptions.body = JSON.stringify(body);
  }

  try {
    const res = await fetch(`${API_URL}/${endpoint}`, requestOptions);

    if (!res.ok) throw new Error('Error al obtener datos');

    return await res.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
