import React from "react";
import { BrowserRouter, Routes as Router, Route } from "react-router-dom";

import { CadastroNotas } from "./components/CadastroNotas";
import { SidebarLateral } from "./components/SidebarLateral";
import { Secao } from "./components/Secao";
import { ListaNotas } from "./components/ListaNotas";
import App from "./App";

export const SidebarRoutes = () => {
    return (
        <BrowserRouter>
            <SidebarLateral />
            <Router>
                <Route path="/listarnotas/:id_secao" element={<ListaNotas />} />
                <Route path="/secao" element={<Secao />} />
                <Route path="/cadastronotas/:id_secao" element={<CadastroNotas />} />
            </Router>
        </BrowserRouter>
    )
};

