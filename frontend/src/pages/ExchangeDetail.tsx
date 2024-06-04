import Chat from "@/features/chat/Chat";
import ExchangeDetailCardInfo from "@/features/exchange/ExchangeDetailCardInfo";
import useExchange from "@/features/exchange/useExchange"
import Empty from "@/features/ui/Empty";
import Heading from "@/features/ui/Heading";
import Section from "@/features/ui/Section";
import Spinner from "@/features/ui/Spinner";
import Tabs from "@/features/ui/Tabs";
import styled from "styled-components";

function ExchangeDetail() {
    const {exchange,isLoading} = useExchange();
    
    if(isLoading){
        return <StyledExchangeDetail>
            <Spinner size="lg" />
        </StyledExchangeDetail>
    }
    if(!exchange){
        return <StyledExchangeDetail>
            <Empty message="No se encontró el intercambio" />
        </StyledExchangeDetail>
    }

    

  return (
    <StyledExchangeDetail>
        <div>
            <header>
                <Heading>Detalles del intercambio</Heading>
            </header>
            <Tabs 
                tabs={[
                    {
                        id: 'exchange',
                        name: 'Intercambio',
                        content: <ExchangeDetailCardInfo exchange={exchange} />
                    },
                    {
                        id: 'messages',
                        name: 'Chat',
                        content: <Chat chat={exchange.chat} />
                    }
                
                ]} 
            />
        </div>
    </StyledExchangeDetail>
  )
}
const StyledExchangeDetail = styled(Section)`
    background-color: var(--primary-color)
    
`
export default ExchangeDetail