
import logo from "../../assets/images/logo.png"

import { Container, Content } from "./styles";

export function Header() {
    return (
        <Container>
            <Content>
                <div className="page-details">
                    <h1>IFPR</h1>
                    <h2>gratuito e de Qualidade</h2>
                </div>

                <img src={logo} alt="AppFood" />
            </Content>
        </Container>
    );
}