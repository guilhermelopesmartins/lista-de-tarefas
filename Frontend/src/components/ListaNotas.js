import React, { useState, useEffect } from "react";
import { DivListaNotas, Row, Button, DivButton, H1, Tag, DivNomeSecao } from "./styles";
import { Link, useParams } from "react-router-dom";
import { GoPencil, GoTrash } from "react-icons/go";


export const ListaNotas = () => {
    const [listaNotas, setListaNotas] = useState([]);
    const [secao, setSecao] = useState([]);
    const [tags, setTags] = useState([]);
    const { id_secao } = useParams();

    const deletaSecao = () => {
        console.log("entrei");
        fetch(`http://localhost:8989/sections/id? ` + new URLSearchParams({ id_secao }).toString(), {
            method: 'Delete'
        })
    }

    const deletaNotas = (id_nota) => {
        console.log("entrei no deleta nota", id_nota);
        fetch(`http://localhost:8989/note/id? ` + new URLSearchParams({ id_nota }).toString(), {
            method: 'Delete'
        })
    }

    useEffect(() => {
        async function notas() {
            const nota = await fetch(`http://localhost:8989/notes/id_secao?` + new URLSearchParams({ id_secao }).toString()).then(res =>
                res.json())

            setListaNotas(nota)

            const secao = await fetch(`http://localhost:8989/section/id?` + new URLSearchParams({ id_secao }).toString()).then(res =>
                res.json())

            setSecao(secao)

            const tags = await fetch(`http://localhost:8989/tags`).then(res =>
                res.json())

            setTags(tags)
        }
        notas()
    }, [id_secao])


    { console.log("tags", tags) }
    { console.log("secao", secao) }
    return (
        <DivListaNotas>
            <H1 gray>
                {secao.titulo}
                <div>
                    <Link to={"/atualizarsecao/" + id_secao}>
                        <GoPencil style={{ height: '20px' }} />
                    </Link>
                    <GoTrash onClick={deletaSecao} style={{ height: '20px' }} />
                </div>
            </H1>
            <span>{secao.descricao}</span>
            <DivButton end>
                <Link to={"/cadastronotas/" + id_secao} style={{ textDecoration: 'none' }}>
                    <Button style={{ background: "#b9a3c4", color: "white", fontWeight: "bold", padding: "0.5rem 1rem", borderRadius: "5px", border: "none", marginBottom: '25px' }}>+ Nova Nota</Button>
                </Link>
            </DivButton>
            {console.log("secoes", secao)}
            {listaNotas.length !== 0 ? (

                listaNotas.map(({ id, id_secao, titulo, descricao, hash_imagem, id_tag, createdAt, updatedAt }) => {
                    const idTagFilter = id_tag;
                    const tag = tags.filter(({ id }) => { return id === idTagFilter });
                    console.log(tag);
                    return (
                        <Row key={id}>
                            {titulo}
                            <div styles="justify-content: space-between; display: flex">

                                {tag[0] !== undefined ?
                                    <Tag disabled value={tag[0].descricao} color={tag[0].cor} />
                                    : ''
                                }
                                <Link to={"/atualizarnota/" + id} >
                                    <GoPencil onClick={deletaNotas(id)}/>
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
