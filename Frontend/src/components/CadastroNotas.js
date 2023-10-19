import { useState } from "react";
import { Input, Textarea, DivNotas, Button, DivButton } from "./styles";

export const CadastroNotas = () => {
    const [titulo, setTitulo] = useState();

    function handleOnChange(e) {
        setTitulo(e.target.value);
    }
    console.log("cheguei");
    return (
        <DivNotas>
            <h1>Cadastrar nova nota</h1>
            <Input type="text" name="titulo" placeholder="Titulo" onChange={handleOnChange} />
            <Input type="date" name="titulo" />
            <Textarea name="titulo" placeholder="Digite suas anotações" />
            <DivButton>
                <Button>Cadastrar</Button>
            </DivButton>
        </DivNotas>
    );
}