import styled from 'styled-components';
import Logo from './Logo';
import { Devices } from '@/styles/Devices';
import { Link, NavLink } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import Button from './Button';
import { useUserContext } from '@/context/UserContext';
import UserProfilePicture from './UserProfilePicture';

function Nav() {
  const { user } = useUserContext();
  return (
    <StyledNav>
      <StyledUl>
        <NavLink to={ROUTES.home}>
          <Logo />
        </NavLink>
        <div className="flex items-center gap-20">
          <StyledNavLink to={ROUTES.products}>Productos </StyledNavLink>

          <StyledNavLink to={ROUTES.contact}>Contacto</StyledNavLink>
          <li>
            {user && <UserProfilePicture user={user} />}
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
  padding: 3rem 2rem;
  width: 100%;
  @media (max-width: ${Devices.tablet}) {
    padding: 2rem 1rem;
  }
  `;

const StyledUl = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;

  max-width: ${Devices.desktop};

  & > div {
    display: flex;
    @media (max-width: ${Devices.tablet}) {
      display: none;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 1rem 2rem;
  &:hover {
    background-color: var(--primary-color-light);
  }
  border-radius: 1rem;

  &.active{
    background-color: var(--primary-color-light);
  }
`;
export default Nav;
