import React from 'react';
import logoImg from "../../assets/logo.svg";
import { FiLogIn} from "react-icons/fi";
import { Container, Content , Background } from './styles';

const SignIn: React.FC = () => (
    <Container >
        <Content >
            <img src={logoImg} alt="GoBarber" />
            <form>
                <h1>Sign in on your GoBarber Account</h1>
                <input placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Log in</button>
                <a href="forgot">Forgot your password ?</a>
            </form>

            <a href="#"><FiLogIn />Sign Up</a>
        </Content>
        <Background />
    </Container>
);

export default SignIn