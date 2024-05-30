import ListUserExchangesOffers from "@/features/exchange/ListUserExchangesOffers"
import ListUserExchangesRequested from "@/features/exchange/ListUserExchangesRequested"
import Heading from "@/features/ui/Heading"
import Section from "@/features/ui/Section"
import Tabs from "@/features/ui/Tabs"
import styled from "styled-components"

const tabs = [
    {
        id:'exchanges-offers',
        name: 'Ofertas',
        content: <ListUserExchangesOffers />
    },
    {
        id:'exchanges-requested',
        name: 'Solicitudes',
        content: <ListUserExchangesRequested />
    }
]

function MyExchanges() {
  return (
    <MyExchangesStyledSection>
        <header>
            <Heading>Mis Intecambios</Heading>
        </header>
        <div>
            <Tabs tabs={tabs} />
        </div>
    </MyExchangesStyledSection>
  )
}

const MyExchangesStyledSection = styled(Section)`
    background-color: var(--primary-color);
`

export default MyExchanges