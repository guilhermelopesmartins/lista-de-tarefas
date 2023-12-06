import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { GoPencil } from "react-icons/go";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Span, StyledLink } from './styles';

export const SidebarLateral = ({ novaNota }) => {

    const [secaonotas, setSecaoNotas] = useState([]);
    
    const storageItem = localStorage.getItem('user');
    const id_usuario = JSON.parse(storageItem).id;
    useEffect(() => {
        async function secoes() {
            const nota = await fetch(`http://localhost:8989/sections/id?` + new URLSearchParams({ id_usuario }).toString())
            .then(res =>
                res.json())

            setSecaoNotas(nota)
        }

        secoes()
    }, [])

    const [kanban, setKanban] = useState(['Kanban 1', 'Kanban 2']);
    const whiteTextStyle = { color: 'white' };
    const boldTextStyle = { fontWeight: 'bold' };

    return (
        <Sidebar style={{ position: 'fixed', minHeight: '45.7rem', overflowY: 'auto', overflowX: 'hidden', zIndex: 3, backgroundColor: '#b9a3c4', minWidth: '15rem' }}>
            <Menu style={{backgroundColor: "#b9a3c4" }}>
                <MenuItem style={{ backgroundColor: "#b9a3c4" }}>
                    <Link to="/" style={{ ...whiteTextStyle, ...boldTextStyle, textDecoration: 'none', fontSize: '13pt' }}>Home</Link>
                </MenuItem>
                <hr style={{ margin: "0.5rem 0", borderColor: "" }} />
                <SubMenu label="Seções" style={{ backgroundColor: "#b9a3c4", ...whiteTextStyle, ...boldTextStyle, fontSize: '13pt' }}>
                    {secaonotas.map((secaonota) => {
                        return (
                            <MenuItem key={secaonota.id} style={{ backgroundColor: "#b9a3c4", display: "flex", justifyContent: 'space-between' }}>
                                <Link to={"/listarnotas/" + secaonota.id} style={{ textDecoration: 'none' }}><span style={{ color: 'white', fontSize: '13pt' }}>{secaonota.titulo}</span></Link>
                            </MenuItem>
                        );
                    })}
                    <MenuItem style={{ backgroundColor: "#b9a3c4" }}>
                        <Link to="/secao" style={{ textDecoration: 'none' }}><span style={{ color: 'white', fontSize: '13pt' }}>+ Nova Seção</span></Link>
                    </MenuItem>
                </SubMenu>
                <hr style={{ margin: "0.5rem 0", borderColor: "" }} />
                <SubMenu label="Kanban" style={{ backgroundColor: "#b9a3c4", ...whiteTextStyle, ...boldTextStyle, fontSize: '13pt' }}>
                    {kanban.map((kanban) => {
                        return (
                            <MenuItem key={kanban} style={{ backgroundColor: "#b9a3c4" }}>
                                <span style={{ color: 'white', fontSize: '13pt', textDecoration: 'none' }}>{kanban}</span>
                            </MenuItem>
                        );
                    })}
                    <MenuItem style={{ backgroundColor: "#b9a3c4" }}>
                        <Link to="/novokanban" style={{ textDecoration: 'none' }}><span style={{ color: 'white', fontSize: '13pt' }}>+ Novo Kanban</span></Link>
                    </MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar >
    );
}
