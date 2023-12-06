import React from "react";
import { Routes as Router, Route } from "react-router-dom";
import { CadastroNotas } from "./components/CadastroNotas";
import { SidebarLateral } from "./components/SidebarLateral";
import Cadastro from "./components/Cadastro";
<<<<<<< HEAD
import Login from "./components/Login";
=======
import  Login  from "./components/Login";
>>>>>>> eef4db6020f803edf160bed59d4a22467ffd8015
import { Secao } from "./components/Secao";
import { ListaNotas } from "./components/ListaNotas";

export const SidebarRoutes = () => {
    return (
        <>
            <SidebarLateral />
            <Router>
<<<<<<< HEAD
                <Route path="/login" element={<Login />} />
=======
                <Route path="/" element={<Login />} />
>>>>>>> eef4db6020f803edf160bed59d4a22467ffd8015
                <Route path="/listarnotas/:id_secao" element={<ListaNotas />} />
                <Route path="/secao" element={<Secao />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/cadastronotas/:id_secao" element={<CadastroNotas />} />
                <Route path="/atualizarnota/:id_nota" element={<CadastroNotas />} />
                <Route path="/atualizarsecao/:id_secao" element={<Secao />} />
            </Router>
        </>
    );
};
