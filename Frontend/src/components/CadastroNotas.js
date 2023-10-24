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
            <Input type="text" name="titulo" placeholder="Titulo" onChange={handleOnChange} style={{ borderRadius: "5px", borderWidth: "1px", padding: "5px" }}/>
            <Input type="date" name="titulo" style={{ borderRadius: "5px", borderWidth: "1px", padding: "5px" }}/>
            <Textarea name="titulo" placeholder="Digite suas anotações" style={{ borderRadius: "5px", borderWidth: "1px", padding: "5px" }}/>
            <DivButton>
                <Button style={{ background: "#14a47c", color: "white", fontWeight: "bold", padding: "0.5rem 1rem", borderRadius: "5px", border: "none" }}>Cadastrar</Button>
            </DivButton>
        </DivNotas>
    );
}