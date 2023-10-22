import React, { useState } from "react";
import { SidebarLateral } from "./SidebarLateral";
import { Input, Button, DivButton, DivSecao } from "./styles";

export const Secao = (secoes) => {
    const [secao, setSecao] = useState();

    function handleOnChange(e) {
        setSecao(e.target.value);
    }

    return (
        <DivSecao>
            <h1>Cadastrar seção</h1>
            <Input type="text" name="titulo" placeholder="Nome" onChange={handleOnChange} style={{ borderRadius: "5px", borderWidth: "1px", padding: "5px" }} />
            <DivButton>
                <Button style={{ background: "#14a47c", color: "white", fontWeight: "bold", padding: "0.5rem 1rem", borderRadius: "5px", border: "none" }}>Cadastrar</Button>
            </DivButton>
        </DivSecao>
    );
}
