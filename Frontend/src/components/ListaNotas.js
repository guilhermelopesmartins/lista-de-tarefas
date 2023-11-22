import React, { useState, useEffect } from "react";
import { DivListaNotas, Row, Button, DivButton } from "./styles";
import { Link, useParams } from "react-router-dom";
import { GoPencil } from "react-icons/go";

export const ListaNotas = ({ notas }) => {
    const [listaNotas, setListaNotas] = useState([]);
    const { id_secao } = useParams();
    useEffect(() => {
        async function notas() {
            const nota = await fetch(`http://localhost:8989/notes/id_secao?` + new URLSearchParams({ id_secao }).toString()).then(res =>
                res.json())

            setListaNotas(nota)
        }

        notas()
    }, [id_secao])

    return (
        <DivListaNotas>
            <h1>Notas da seção {id_secao}</h1>
            <DivButton>
                <Link to={"/cadastronotas/" + id_secao} style={{ textDecoration: 'none' }}>
                    <Button style={{ background: "#14a47c", color: "white", fontWeight: "bold", padding: "0.5rem 1rem", borderRadius: "5px", border: "none" }}>+ Nova Nota</Button>
                </Link>
            </DivButton>
            {console.log(listaNotas.length)}
            {listaNotas.length != 0 ? (

                listaNotas.map(({ id, id_secao, titulo, descricao, hash_imagem, id_tag, createdAt, updatedAt }) => {
                    return (
                        <Row key={id}>{titulo}<GoPencil /></Row>
                    );
                })
            ) : (
                <Row key={1}>{"Ainda não há notas cadastradas nesta seção"}</Row>
            )}

        </DivListaNotas>
    );
}
