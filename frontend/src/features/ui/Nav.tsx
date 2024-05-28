import styled from 'styled-components';
import Logo from './Logo';
import { Devices } from '@/styles/Devices';
import { Link, NavLink } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import Button from './Button';
import { useUserContext } from '@/context/UserContext';
import UserProfilePicture from './UserProfilePicture';
import { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import NavMobileMenu from './NavMobileMenu';
import { AnimatePresence } from 'framer-motion';

function Nav() {
  const { user } = useUserContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <StyledNav className={isMenuOpen ? 'fixed' : 'relative'}>
      <StyledUl>
        <NavLink to={ROUTES.home}>
          <Logo />
        </NavLink>
        <div className="flex items-center gap-20">
          <StyledNavLink to={ROUTES.products}>Productos</StyledNavLink>
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
        <li className='md:hidden'>
          <StyledHamburger
            toggled={isMenuOpen}
            toggle={setIsMenuOpen}
            size={30}
            color="#1AC760"
          />
        </li>
      </StyledUl>
      <AnimatePresence>
        {isMenuOpen && <NavMobileMenu setIsOpen={(isOpen) => setIsMenuOpen(isOpen)} />}
      </AnimatePresence>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.4rem 2rem;
  width: 100%;
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1001;
  }
  &.relative {
    position: relative;
  }
  @media (max-width: ${Devices.laptop}) {
    padding: 2rem 1rem;
  }
`;

const StyledUl = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  &.active {
    background-color: var(--primary-color-light);
  }
`;

const StyledHamburger = styled(Hamburger)`
  display: block;
  @media (min-width: ${Devices.tablet}) {
    display: none;
  }
`;

export default Nav;
