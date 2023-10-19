import { useState } from "react";
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
            <Input type="text" name="titulo" placeholder="Nome" onChange={handleOnChange} />
            <DivButton>
                <Button>Cadastrar</Button>
            </DivButton>
        </DivSecao>
    );
}