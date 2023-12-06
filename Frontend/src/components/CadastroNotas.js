import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Input, Textarea, DivNotas, Button, DivButton, Select, Option, H1 } from "./styles";

export const CadastroNotas = () => {
    const { id_secao, id_nota } = useParams();
    const [titulo, setTitulo] = useState();
    const [descricao, setDescricao] = useState();
    const [tag, setTag] = useState();
    const [nota, setNota] = useState();
    const [tags, setTags] = useState();

    console.log(id_nota);

    useEffect(() => {
        async function notas() {
            const nota = await fetch(`http://localhost:8989/note/id_nota?` + new URLSearchParams({ id_nota }).toString()).then(res =>
                res.json())
            console.log("notas", nota)
            setNota(nota[0])

            const tags = await fetch(`http://localhost:8989/tags`).then(res =>
                res.json())

            setTags(tags)
            console.log("notas", nota)
        }

        notas()
    }, [id_nota])


    function cadastroNota() {
        console.log("entrei", tag);
        fetch('http://localhost:8989/notes', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    id_secao: id_secao,
                    titulo: titulo,
                    descricao: descricao,
                    id_usuario: 1,
                    hash_imagem: "imagem",
                    id_tag: tag,
                }
            )
        })
            .then(res => {
                res.json()
            })
            .catch(function (error) {
                console.log("Messagem: " + error.message);
            });
    }

    return (
        <DivNotas>
            <H1>Criar nota</H1>
            <Select onChange={(e) => setTag(e.target.value)} value={nota != undefined ? nota.id_tag : ''}>
                <Option value="">Selecione uma tag</Option>
                {tags !== undefined ? tags.map(({ id, descricao }) => {
                    return <Option value={id}>{descricao}</Option>
                })
                    : ''}
            </Select>
            {console.log(nota)}
            <Input value={nota != undefined ? nota.titulo : ''} type="text" name="titulo" placeholder="Titulo" onChange={(e) => setTitulo(e.target.value)} style={{ borderRadius: "5px", borderWidth: "1px", padding: "5px" }} />
            <Textarea value={nota != undefined ? nota.descricao : ''} name="descricao" placeholder="Digite suas anotações" onChange={(e) => setDescricao(e.target.value)} style={{ borderRadius: "5px", borderWidth: "1px", padding: "5px" }} />
            <DivButton>
                <Link to={"/listarnotas/" + id_secao} style={{ textDecoration: 'none' }}>
                    <Button onClick={cadastroNota}>Criar</Button>
                </Link>
            </DivButton>
        </DivNotas>
    );
}