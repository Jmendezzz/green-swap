import { HiLogout } from 'react-icons/hi';
import styled from 'styled-components';

function Logout() {
  return (
    <StyledLogout>
      <HiLogout size={20} />
      <h2>Cerrar Sesión</h2>
    </StyledLogout>
  );
}

const StyledLogout = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    cursor: pointer;
    color: var(--white);
    transition: all 0.2s;

    &:hover {
        color: white;
    }

`

export default Logout;
