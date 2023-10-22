import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

export const SidebarLateral = ({ novaNota }) => {
    const [secaonotas, setSecaoNotas] = useState([
        {
            id: '1',
            secao: 'Seção 1',
            notas: ['Nota 1', 'Nota 2', 'Nota 3', 'Nota 4', 'Nota 5', 'Nota 6']
        },
        {
            id: '2',
            secao: 'Seção 2',
            notas: ['Nota 1', 'Nota 2', 'Nota 3', 'Nota 4', 'Nota 5', 'Nota 6', 'Nota 7', 'Nota 8']
        },
    ]);

    const [kanban, setKanban] = useState(['Kanban 1', 'Kanban 2']);
    const whiteTextStyle = { color: 'white' };
    const boldTextStyle = { fontWeight: 'bold' };

    return (
        <Sidebar style={{ backgroundColor: "#1c2424", width: "250px", height: "100%", display: 'flex', flexDirection: 'column' }}>
            <Menu style={{ backgroundColor: "#1c2424"}}>
                <MenuItem>
                    <Link to="/" style={{ ...whiteTextStyle, ...boldTextStyle, textDecoration: 'none'}}>Home</Link>
                </MenuItem>
                <hr style={{ margin: "0.5rem 0", borderColor: "gray" }} />
                <SubMenu label="Notas" style={{ backgroundColor: "#1c2424", ...whiteTextStyle, ...boldTextStyle }}>
                    {secaonotas.map((secaonota) => {
                        return (
                            <MenuItem key={secaonota.secao} style={{ backgroundColor: "#1c2424"}}>
                                <Link to={"/listarnotas/" + secaonota.id} style={whiteTextStyle}>{secaonota.secao}</Link>
                            </MenuItem>
                        );
                    })}
                    <MenuItem style={{ backgroundColor: "#1c2424" }}>
                        <Link to="/secao" style={whiteTextStyle}>+ Nova Seção</Link>
                    </MenuItem>
                </SubMenu>
                <hr style={{ margin: "0.5rem 0", borderColor: "gray" }} />
                <SubMenu label="Kanban" style={{ backgroundColor: "#1c2424", ...whiteTextStyle, ...boldTextStyle }}>
                    {kanban.map((kanban) => {
                        return (
                            <MenuItem key={kanban} style={{ backgroundColor: "#1c2424" }}>
                                <span style={whiteTextStyle}>{kanban}</span>
                            </MenuItem>
                        );
                    })}
                    <MenuItem style={{ backgroundColor: "#1c2424" }}>
                        <Link to="/novokanban" style={whiteTextStyle}>+ Novo Kanban</Link>
                    </MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    );
}
