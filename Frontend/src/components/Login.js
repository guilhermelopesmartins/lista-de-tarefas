import { Button, Input, DivLogin, Title, Container } from './styles';

const Login = () => {
    return (
        <Container>
            <DivLogin>
                <Title>Login</Title>

                <Input type="text" name="user" id="user" placeholder="Usuário" /><br />
                <Input type="password" name="password" id="password" placeholder="Senha" /><br />

                <Button>Login</Button>
            </DivLogin>
        </Container>
    );
}

export default Login;
