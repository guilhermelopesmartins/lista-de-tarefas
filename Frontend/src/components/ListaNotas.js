import React, { useState } from "react";
import { DivListaNotas, Row, Button } from "./styles";
import { Link, useParams } from "react-router-dom";

export const ListaNotas = ({ notas }) => {
    const { secaoId } = useParams();
    const [listaNotas, setListaNotas] = useState([
        {
            idsecao: '1',
            notas: ['Nota 1', 'Nota 2', 'Nota 3', 'Nota 4', 'Nota 5', 'Nota 6']
        },
        {
            idsecao: '2',
            notas: ['Nota 1', 'Nota 2', 'Nota 3', 'Nota 4', 'Nota 5', 'Nota 6', 'Nota 7', 'Nota 8']
        },
    ]);

    return (
        <DivListaNotas>
            <h1>Notas da seção {secaoId}</h1>
            <Link to="/cadastronotas" style={{ textDecoration: 'none' }}>
                <Button style={{ background: "#14a47c", color: "white", fontWeight: "bold", padding: "0.5rem 1rem", borderRadius: "5px", border: "none" }}>+ Nova Nota</Button>
            </Link>
            {listaNotas.filter((nota) => nota.idsecao === secaoId).map(({ notas }) => {
                return (
                    notas.map((nota) => {
                        return (
                            <Row key={nota}>{nota}</Row>
                        );
                    })
                );
            })}
        </DivListaNotas>
    );
}
