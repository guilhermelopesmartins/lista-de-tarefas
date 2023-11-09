import React, { useState,useEffect } from "react";
import { DivListaNotas, Row, Button } from "./styles";
import { Link, useParams } from "react-router-dom";

export const ListaNotas = ({ notas }) => {
    const [listaNotas, setListaNotas] = useState([]);
    const { id_secao } = useParams();
    useEffect(()=>{
        async function notas(){
            const nota = await fetch(`http://localhost:8989/notes/id_secao?` + new URLSearchParams({ id_secao }).toString()).then(res =>
            res.json())
            
            setListaNotas(nota)
        } 

        notas()
    },[id_secao])
    
    console.log(notas);


    


    return (
        <DivListaNotas>
            <h1>Notas da seção {id_secao}</h1>
            <Link to="/cadastronotas" style={{ textDecoration: 'none' }}>
                <Button style={{ background: "#14a47c", color: "white", fontWeight: "bold", padding: "0.5rem 1rem", borderRadius: "5px", border: "none" }}>+ Nova Nota</Button>
            </Link>
            {console.log('notas')}
            {console.log(listaNotas)}
            {listaNotas.map(({id, id_secao, titulo, descricao, hash_imagem, id_tag, createdAt, updatedAt}) => {
                
                    console.log()
                
                return (
                    <Row key={id}>{titulo}</Row>
                );
            })}
        </DivListaNotas>
    );
}
