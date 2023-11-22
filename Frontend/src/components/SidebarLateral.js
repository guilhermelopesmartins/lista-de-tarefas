import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { GoPencil } from "react-icons/go";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Span, StyledLink } from './styles';

export const SidebarLateral = ({ novaNota }) => {

    const [secaonotas, setSecaoNotas] = useState([]);

    useEffect(() => {
        async function secoes() {
            const nota = await fetch('http://localhost:8989/sections').then(res =>
                res.json())

            setSecaoNotas(nota)
        }

        secoes()
    }, [])

    const [kanban, setKanban] = useState(['Kanban 1', 'Kanban 2']);
    const whiteTextStyle = { color: 'white' };
    const boldTextStyle = { fontWeight: 'bold' };

    return (
        <Sidebar style={{ backgroundColor: "#1c2424", width: "250px", height: "100%", display: 'flex', flexDirection: 'column' }}>
            <Menu style={{ backgroundColor: "#1c2424" }}>
                <MenuItem>
                    <Link to="/" style={{ ...whiteTextStyle, ...boldTextStyle, textDecoration: 'none', fontSize: '13pt' }}>Home</Link>
                </MenuItem>
                <hr style={{ margin: "0.5rem 0", borderColor: "gray" }} />
                <SubMenu label="Seções" style={{ backgroundColor: "#1c2424", ...whiteTextStyle, ...boldTextStyle, fontSize: '13pt' }}>
                    {secaonotas.map((secaonota) => {
                        return (
                            <MenuItem suffix={<GoPencil color='white' />} key={secaonota.id} style={{ backgroundColor: "#1c2424", display: "flex", justifyContent: 'space-between' }}>
                                <Link to={"/listarnotas/" + secaonota.id} style={{ textDecoration: 'none' }}><span style={{ color: 'white', fontSize: '13pt' }}>{secaonota.titulo}</span></Link>
                            </MenuItem>
                        );
                    })}
                    <MenuItem style={{ backgroundColor: "#1c2424" }}>
                        <Link to="/secao" style={{ textDecoration: 'none' }}><span style={{ color: 'white', fontSize: '13pt' }}>+ Nova Seção</span></Link>
                    </MenuItem>
                </SubMenu>
                <hr style={{ margin: "0.5rem 0", borderColor: "gray" }} />
                <SubMenu label="Kanban" style={{ backgroundColor: "#1c2424", ...whiteTextStyle, ...boldTextStyle, fontSize: '13pt' }}>
                    {kanban.map((kanban) => {
                        return (
                            <MenuItem key={kanban} style={{ backgroundColor: "#1c2424" }}>
                                <span style={{ color: 'white', fontSize: '13pt', textDecoration: 'none' }}>{kanban}</span>
                            </MenuItem>
                        );
                    })}
                    <MenuItem style={{ backgroundColor: "#1c2424" }}>
                        <Link to="/novokanban" style={{ textDecoration: 'none' }}><span style={{ color: 'white', fontSize: '13pt' }}>+ Novo Kanban</span></Link>
                    </MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar >
    );
}
