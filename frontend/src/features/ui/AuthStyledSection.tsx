import { ReactNode } from 'react';
import Section from './Section';
import styled from 'styled-components';
import Row from './Row';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import Logo from './Logo';

interface Props {
  children: ReactNode;
}
function AuthStyledSection({ children }: Props) {
  return (
    <AuthStyledSectionContainer>
      <Row type="vertical">
        <header>
          <Link to={ROUTES.home}>
            <Logo />
          </Link>
        </header>
        <section className="w-full h-full">{children}</section>
      </Row>
    </AuthStyledSectionContainer>
  );
}

const AuthStyledSectionContainer = styled(Section)`
  background-image: url('assets/login-background.png');
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

export default AuthStyledSection;
