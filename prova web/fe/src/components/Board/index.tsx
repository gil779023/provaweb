import { OrdersBoard } from "../BoardItens";
import { Container } from "./styles";

export function Orders() {
    return (
        <Container>
            <OrdersBoard
            icon="ℹ️"
            title="Informacoes"/>
            <OrdersBoard
            icon="🏫"
            title=""/>
            <OrdersBoard
            icon="📰"
            title="Feed"/>
        </Container>
    )
}