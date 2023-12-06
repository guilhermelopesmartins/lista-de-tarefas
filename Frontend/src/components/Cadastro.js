import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Cadastro = () => {
  const [usuario, setUsuario] = useState({ nome: '', email: '', senha: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prevUsuario) => ({ ...prevUsuario, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implemente a lógica de cadastro aqui
  };

  return (
    <div style={{ textAlign: 'center', margin: '50px auto', maxWidth: '300px' }}>
      <h2 style={{ color: '#333' }}>Cadastro</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ marginBottom: '10px', textAlign: 'left' }}>
          <strong>Nome:</strong>
          <input
            type="text"
            name="nome"
            value={usuario.nome}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </label>
        <label style={{ marginBottom: '10px', textAlign: 'left' }}>
          <strong>Email:</strong>
          <input
            type="email"
            name="email"
            value={usuario.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </label>
        <label style={{ marginBottom: '10px', textAlign: 'left' }}>
          <strong>Senha:</strong>
          <input
            type="password"
            name="senha"
            value={usuario.senha}
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
        >
          Cadastrar
        </button>
      </form>
      <p style={{ marginTop: '10px', color: '#555', fontSize: '14px', fontWeight: 'bold' }}>
        <span>Já tem uma conta? </span><Link to="/login" style={{ color: '#14bc84', textDecoration: 'none', fontWeight: 'bold' }}>Faça login</Link>
      </p>
    </div>
  );
};

export default Cadastro;
