import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cadastro = () => {
  const [usuario, setUsuario] = useState({ nome: '', email: '', senha: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prevUsuario) => ({ ...prevUsuario, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implemente a lógica de cadastro aqui
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="nome" value={usuario.nome} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={usuario.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Senha:
          <input type="password" name="senha" value={usuario.senha} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
      <p>
        Já tem uma conta? <Link to="/login">Faça login</Link>
      </p>
    </div>
  );
};

export default Cadastro;
