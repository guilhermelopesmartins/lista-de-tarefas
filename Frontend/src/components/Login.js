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
    const responseData = await fetch('http://localhost:8989/users/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    email: credenciais.email,
                    senha: credenciais.senha
                }
            )
        });

        const userData = await responseData.json();
        if (typeof(userData) == 'string'){
          alert(userData);
          return;
        }
        localStorage.setItem('user', JSON.stringify(userData))
    // Redirecionamento para a página de notas após o login
    navigate('/listasecoes');
  };

  return (
    <div style={{ textAlign: 'center', margin: '50px auto', maxWidth: '300px' }}>
      <h2 style={{ color: '#333' }}>Login</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ marginBottom: '10px', textAlign: 'left' }}>
          <strong>E-mail:</strong>
          <input
            type="email"
            name="email"
            value={credenciais.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
        </label>
        <label style={{ marginBottom: '10px', textAlign: 'left' }}>
          <strong>Senha:</strong>
          <input
            type="password"
            name="senha"
            value={credenciais.senha}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </label>
        <button
          type="submit"
          style={{
            background: '#14bc84',
            color: 'white',
            padding: '10px',
            border: 'none',
            cursor: 'pointer',
            transition: 'background 0.3s ease',
            marginTop: '10px', 
          }}
          onMouseOver={(e) => e.target.style.background = '#12a072'}
          onMouseLeave={(e) => e.target.style.background = '#14bc84'}
        >
          Login
        </button>
      </form>
      <p style={{ marginTop: '10px', color: '#555', fontSize: '14px', fontWeight: 'bold' }}>
        <span>Não tem uma conta? </span><Link to="/cadastro" style={{ color: '#14bc84', textDecoration: 'none' }}>Crie uma conta</Link>
      </p>
    </div>
  );
};

export default Login;
