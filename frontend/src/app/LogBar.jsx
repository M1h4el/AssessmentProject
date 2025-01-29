'use client';

import React, { useState } from 'react';
import '@/styles/LogBar.scss';
import { useRouter } from 'next/navigation';

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const backendUrl = process.env.NEXT_PUBLIC_URL_BACKEND
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Por favor, complete todos los campos.');
      return;
    }

    setLoading(true);

    try {
      console.log(backendUrl);
      const response = await fetch(`${backendUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      setEmail('');
      setPassword('');
      setError('');

      if (response.ok) {
        console.log('Login exitoso');
        localStorage.setItem('jwt', data.access_token);
        router.push('/dashboard');
      } else {
        console.error('Error al iniciar sesión:', data.message);
        setError('Hubo un error al iniciar sesión. Intenta nuevamente.');
      }
    } catch (err) {
      console.error('Error al enviar los datos:', err);
      setError('Hubo un error al iniciar sesión. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="header-container">
      <div className="login-wrapper">
        <h2 className="login-title">Iniciar sesión</h2>
        <form className="login-form" onSubmit={handleForm}>
          <input
            type="text"
            placeholder="Email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error-message">{error}</p>}
          <button className="login-button" type="submit" disabled={loading}>
            {loading ? 'Cargando...' : 'Login'}
          </button>
        </form>
      </div>
    </header>
  );
};

export default LoginForm;
