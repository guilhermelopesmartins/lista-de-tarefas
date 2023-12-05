import React, { useState, useEffect } from "react";
import { DivListaNotas, Row, Button, DivButton, H1, Tag } from "./styles";
import { Link, useParams } from "react-router-dom";
import { GoPencil, GoTrash } from "react-icons/go";


export const ListaNotas = ({ notas }) => {
    const [listaNotas, setListaNotas] = useState([]);
    const [secao, setSecao] = useState([]);

    const { id_secao } = useParams();


    useEffect(() => {
        async function notas() {
            const nota = await fetch(`http://localhost:8989/notes/id_secao?` + new URLSearchParams({ id_secao }).toString()).then(res =>
                res.json())

            setListaNotas(nota)

            const secao = await fetch(`http://localhost:8989/section/id?` + new URLSearchParams({ id_secao }).toString()).then(res =>
                res.json())

            setSecao(secao)
        }

        notas()
    }, [id_secao])

    return (
        <DivListaNotas>
            <H1 gray>Notas da seção {secao.titulo}</H1>
            <DivButton end>
                <Link to={"/cadastronotas/" + id_secao} style={{ textDecoration: 'none' }}>
                    <Button style={{ background: "#b9a3c4", color: "white", fontWeight: "bold", padding: "0.5rem 1rem", borderRadius: "5px", border: "none" }}>+ Nova Nota</Button>
                </Link>
            </DivButton>
            {console.log("secoes", secao)}
            {listaNotas.length != 0 ? (

                listaNotas.map(({ id, id_secao, titulo, descricao, hash_imagem, id_tag, createdAt, updatedAt }) => {
                    return (
                        <Row key={id}>
                            {titulo}
                            <div>
                                <Tag disabled value="Tag" color={'blue'} />
                                <Link to={"/atualizarnota/" + id} >
                                    <GoPencil />
                                </Link>
                                <Link to={"/deletarNota/" + id} >
                                    <GoTrash />
                                </Link>
                            </div>
                        </Row>

                    );
                })
            ) : (
                <Row key={1}>{"Ainda não há notas cadastradas nesta seção"}</Row>
            )}

        </DivListaNotas>
    );
}
