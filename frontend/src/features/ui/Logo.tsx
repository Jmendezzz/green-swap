import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import { Devices } from '@/styles/Devices';

function Logo({ className }: { className?: string }) {
  return <StyledLogo className={className} src={logo} alt="GreenSwap Logo" />;
}

const StyledLogo = styled.img`
  width: 400px;

 
  @media (max-width: ${Devices.desktop}) {
    width: 300px;
  } 
 
  @media (max-width: ${Devices.laptop}) {
    width: 250px;
  }

  @media (max-width: ${Devices.tablet}) {
    width: 200px;
  }

  @media (max-width: ${Devices.mobile}) {
    width: 180px;
  }
`;

export default Logo;
