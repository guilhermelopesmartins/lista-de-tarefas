import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [credenciais, setCredenciais] = useState({ email: '', senha: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredenciais((prevCredenciais) => ({ ...prevCredenciais, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Lógica de login

    // Redirecionamento para a página de notas após o login
    navigate('/listarnotas');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={credenciais.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Senha:
          <input type="password" name="senha" value={credenciais.senha} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <p>
        Não tem uma conta? <Link to="/cadastro">Crie uma conta</Link>
      </p>
    </div>
  );
};

export default Login;
