import styled from "styled-components"
import Nav from "./Nav"
import { Outlet } from "react-router-dom"

function AppLayout() {
  return (
    <StyledAppLayout>
        <Nav />
        <main>
            <Outlet />
        </main>
    </StyledAppLayout>
  )
}

const StyledAppLayout = styled.div`
    display:flex;
    flex-direction:column;
    
    `

export default AppLayout