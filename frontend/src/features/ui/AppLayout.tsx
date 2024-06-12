import styled from 'styled-components';
import Nav from './Nav';
import { Outlet } from 'react-router-dom';
import FullScreenSpinner from './FullScreenSpinner';
import { useUserContext } from '@/context/UserContext';

function AppLayout() {
  const { isLoading} = useUserContext();

  if (isLoading) {
    return <FullScreenSpinner />;
  }

  return (
    <StyledAppLayout>
      <Nav />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}
const StyledAppLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  width: 100%;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  overflow-y: auto;
`;

export default AppLayout;
