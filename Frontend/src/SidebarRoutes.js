import React from "react";
import { BrowserRouter, Routes as Router, Route } from "react-router-dom";

import { CadastroNotas } from "./components/CadastroNotas";
import { SidebarLateral } from "./components/SidebarLateral";
import { Secao } from "./components/Secao";
import { ListaNotas } from "./components/ListaNotas";

export const SidebarRoutes = () => {
    return (
        <BrowserRouter>
            <SidebarLateral />
            <Router>
                <Route path="/listarnotas/:secaoId" element={<ListaNotas />} />
                <Route path="/secao" element={<Secao />} />
                <Route path="/cadastronotas" element={<CadastroNotas />} />
            </Router>
        </BrowserRouter>
    )
};

