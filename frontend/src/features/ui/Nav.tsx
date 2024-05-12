import styled from 'styled-components';
import useUser from '../auth/user/useUser';
import Logo from './Logo';
import { Devices } from '@/styles/Devices';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import Button from './Button';
import NavItem from './NavItem';

function Nav() {
  const { user, isLoading } = useUser();
  return (
    <StyledNav>
      <StyledUl>
        <Logo />
        <div className="flex items-center gap-20">
          <NavItem>
            <Link to={ROUTES.products}>Productos</Link>
          </NavItem>
          <NavItem>
            <Link to={ROUTES.contact}>Contacto</Link>
          </NavItem>
          <li>
            {isLoading && <p>Loading...</p>}
            {user && <p>{user.fullName}</p>}
            {!user && (
              <Link to={ROUTES.login}>
                <Button variant="primary" size="small">
                  Ingresar
                </Button>
              </Link>
            )}
          </li>
        </div>
      </StyledUl>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  padding: 4rem 2rem;
  width: 100%;
  @media (max-width: ${Devices.tablet}) {
    padding: 2rem 1rem;
  }

`;

const StyledUl = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${Devices.desktop};

  & > div{
    display:flex;
    @media (max-width: ${Devices.tablet}){
      display:none;
    }
  }

`;

export default Nav;
