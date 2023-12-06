import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Cadastro from "./components/Cadastro";
import { ListaNotas } from "./components/ListaNotas";
import { SidebarLateral } from './components/SidebarLateral';
import { Secao } from './components/Secao';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/listasecoes" element={<SidebarLateral />} />
        <Route path="/listarnotas/:id_secao" element={<ListaNotas />} />
        <Route path="/login" element={<Login />} />
        <Route path="/secao" element={<Secao />} />
      </Routes>
    </Router>
  );
}

export default App;
