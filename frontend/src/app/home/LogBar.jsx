import React from 'react';
import '../../styles/LogBar.scss';

const Login = () => {
  return (
    <div className="login-container">
      <h2 className="login-title">Iniciar sesión</h2>
      <form>
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        <button className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;