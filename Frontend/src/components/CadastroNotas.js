import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Input, Textarea, DivNotas, Button, DivButton, Select, Option } from "./styles";

export const CadastroNotas = () => {
    const { id_secao } = useParams();
    const [titulo, setTitulo] = useState();
    const [descricao, setDescricao] = useState();
    const [tag, setTag] = useState();


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
            <h1>Cadastrar nova nota</h1>
            <Select onChange={(e) => setTag(e.target.value)}>
                <Option value="">Selecione uma tag</Option>
                <Option value="0">Geral</Option>
                <Option value="1">Pessoal</Option>
                <Option value="2">Estudos</Option>
                <Option value="3">Compras</Option>
                <Option value="4">Lista de desejos</Option>
            </Select>
            <Input type="text" name="titulo" placeholder="Titulo" onChange={(e) => setTitulo(e.target.value)} style={{ borderRadius: "5px", borderWidth: "1px", padding: "5px" }} />
            <Textarea name="descricao" placeholder="Digite suas anotações" onChange={(e) => setDescricao(e.target.value)} style={{ borderRadius: "5px", borderWidth: "1px", padding: "5px" }} />
            <DivButton>
                <Link to={"/listarnotas/" + id_secao} style={{ textDecoration: 'none' }}>
                    <Button onClick={cadastroNota}>Cadastrar</Button>
                </Link>
            </DivButton>
        </DivNotas>
    );
}