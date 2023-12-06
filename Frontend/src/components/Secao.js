import React, { useEffect, useState, createContext } from "react";
import { Input, Button, DivButton, DivSecao, H1 } from "./styles";
import { Link, useParams } from "react-router-dom";

export const Secao = (secoes) => {
    const [titulo, setTitulo] = useState();
    const [descricao, setDescricao] = useState();
    const [secao, setSecao] = useState();
    const { id_secao } = useParams();

    useEffect(() => {
        async function secao() {

            const secao = await fetch(`http://localhost:8989/section/id?` + new URLSearchParams({ id_secao }).toString()).then(res =>
                res.json())
            console.log(secao)
            setSecao(secao)
        }

        secao()
    }, [id_secao])

    function cadastroSecao() {
        console.log("entrei")
        fetch('http://localhost:8989/sections', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    titulo: titulo,
                    descricao: descricao,
                    id_usuario: 1
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

    function atualizarSecao() {
        console.log("entrei")
        fetch('http://localhost:8989/sections', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    titulo: titulo,
                    descricao: descricao,
                    id_usuario: 1
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
        <DivSecao>
            <br /><br />
            <H1>Criar seção</H1>
            <Input firstInput value={secao !== undefined ? secao.titulo : ''} type="text" name="titulo" placeholder="Titulo" onChange={(e) => setTitulo(e.target.value)} style={{ borderRadius: "5px", borderWidth: "1px", padding: "5px" }} />
            <Input type="text" value={secao !== undefined ? secao.descricao : ''} name="descricao" placeholder="Descricao" onChange={(e) => setDescricao(e.target.value)} style={{ borderRadius: "5px", borderWidth: "1px", padding: "5px" }} />

            <DivButton>
                <Link to={"/listarnotas/"} >
                    {secao !== undefined ?
                        <Button onClick={atualizarSecao} style={{ background: "#b9a3c4", color: "white", fontWeight: "bold", padding: "0.5rem 1rem", borderRadius: "5px", border: "none" }}>
                            Atualizar
                        </Button>
                        : <Button onClick={cadastroSecao} style={{ background: "#b9a3c4", color: "white", fontWeight: "bold", padding: "0.5rem 1rem", borderRadius: "5px", border: "none" }}>
                            Cadastrar
                        </Button>
                    }
                </Link>
            </DivButton>
        </DivSecao>
    );
}