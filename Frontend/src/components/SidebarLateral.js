import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useState } from 'react';

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
            notas: ['Nota 1', 'Nota 2', 'Nota 3', 'Nota 4', 'Nota 5', 'Nota 6', , 'Nota 7', 'Nota 8']
        },
    ]);

    const [kanban, setKanban] = useState(['Kanban 1', 'Kanban 2']);
    return (
        <Sidebar>
            <Menu>
                <MenuItem><Link to="/">Home</Link></MenuItem>
                <SubMenu label="Notas">
                    {secaonotas.map((secaonota) => {
                        return (
                            <MenuItem key={secaonota.secao}>                                {/* {secaonota.notas.map((nota) => {
                                return (
                                    <MenuItem key={nota}>{nota}</MenuItem>
                                );
                            })} */}
                                <Link to={"/listarnotas/" + secaonota.id}>{secaonota.secao}</Link>
                            </MenuItem>
                        );
                    })}
                    <MenuItem><Link to="/secao">+ Nova Seção</Link></MenuItem>
                </SubMenu>
                <SubMenu label="Kanban">
                    {kanban.map((kanban) => {
                        return (
                            <MenuItem key={kanban}>
                                {/* {secaonota.notas.map((nota) => {
                                return (
                                    <MenuItem key={nota}>{nota}</MenuItem>
                                );
                            })} */}
                                {kanban}
                            </MenuItem>
                        );
                    })}
                    <MenuItem><Link>+ Novo Kanban</Link></MenuItem>
                </SubMenu>

            </Menu>
        </Sidebar >
    );
}

