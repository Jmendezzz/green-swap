import styled from "styled-components"
import Nav from "./Nav"
import { Outlet, useLocation } from "react-router-dom"
import useUser from "../auth/user/useUser";
import FullScreenSpinner from "./FullScreenSpinner";
import { useEffect } from "react";

function AppLayout() {
  const {isLoading, getUser} = useUser();
  const location = useLocation();

  useEffect(() => {
    getUser();
  }, [location,getUser]);

  if(isLoading){
    return <FullScreenSpinner />
  }

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