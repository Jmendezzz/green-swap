import { ExchangeDTO } from "@/domain/exchange/ExchangeDTO";
import styled from "styled-components";

interface Props {
    exchange: ExchangeDTO;
}
function ExchangeOfferItemCard({ exchange }: Props) {
  return (
    <StyledExchangeOfferItemCard>
        <p>{exchange.productOffered.name}</p>
        <p>por</p>
        <p>{exchange.productRequested.name}</p>
    </StyledExchangeOfferItemCard>
  )
}

const StyledExchangeOfferItemCard = styled.div`
    display: flex;
    gap: 1rem;
    align-items:center;

`

export default ExchangeOfferItemCard