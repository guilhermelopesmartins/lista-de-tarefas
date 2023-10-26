import React, { useState,useEffect } from "react";
import { DivListaNotas, Row, Button } from "./styles";
import { Link, useParams } from "react-router-dom";

export const ListaNotas = ({ notas }) => {
    useEffect(()=>{
        async function notas(){
            const nota = await fetch('http://localhost:8989/notes').then(res =>
            res.json())

            setListaNotas(nota)
        } 

        notas()
    },[])
    
    console.log(notas);

    const { secaoId } = useParams();
    const [listaNotas, setListaNotas] = useState([]);

    


    return (
        <DivListaNotas>
            <h1>Notas da seção {secaoId}</h1>
            <Link to="/cadastronotas" style={{ textDecoration: 'none' }}>
                <Button style={{ background: "#14a47c", color: "white", fontWeight: "bold", padding: "0.5rem 1rem", borderRadius: "5px", border: "none" }}>+ Nova Nota</Button>
            </Link>
            {listaNotas.map(({id, id_secao, titulo, descricao, hash_imagem, id_tag, createdAt, updatedAt}) => {
                return (
                    <Row key={id}>{titulo}</Row>
                );
            })}
        </DivListaNotas>
    );
}
