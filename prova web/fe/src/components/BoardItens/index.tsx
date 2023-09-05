import { Board, OrdersContainer } from "./styles";

interface OrdersBaordProps {
    icon: string;
    title:string;
}

export function OrdersBoard({icon, title}:OrdersBaordProps) {
    return (
        <Board>
                <header>
                    <span>{icon}</span>
                    <strong>{title}</strong>
                    
                </header>

                <OrdersContainer>
                    <button type="button">
                        <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos esse modi
                             accusantium, natus alias vel eligendi. Totam, nisi repudiandae. Nostrum sed quibusdam 
                             explicabo quae velit voluptate odit mollitia sit aperiam!</strong>
                        
                    </button>
                    <button type="button">
                        <strong>Lorem ipsum dolor sit amet consectetur adipisicing
                             elit. Sed, porro repellendus eaque vitae dolore totam asperiore
                             s fugiat perferendis ullam ipsum consequatur vel unde ex aut in dolores
                              officia magni voluptates.</strong>
                        
                    </button>
                </OrdersContainer>
            </Board>
    );
}

