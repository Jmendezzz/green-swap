import styled from 'styled-components';
import Section from './Section';
import Heading from './Heading';
import Button from './Button';
import heroImage from '../../assets/hero-image.png';
import { Devices } from '@/styles/Devices';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { FaRecycle, FaLeaf, FaGlobeAmericas } from 'react-icons/fa';

function HeroSection() {
  return (
    <StyledHeroSection>
      <StyledHeroContent>
        <header className="flex w-[90%]  flex-col">
          <div className="space-y-10 flex flex-col justify-center">
            <Heading type="h1" align="left">
              Intercambia productos para un{' '}
              <span className="text-contrast">Futuro Sostenible</span>
            </Heading>
            <p>
              ¡Cambia lo que tienes por lo que necesitas y haz del mundo un
              lugar más verde! ¡Únete a nosotros!
            </p>
            <div className="flex justify-start">
              <Link to={ROUTES.products}>
                <Button variant="primary">Ver Productos</Button>
              </Link>
            </div>
          </div>
        </header>
        <StyledImageContainer>
          <img src={heroImage} alt="Hero" />
          <IconContainer>
            <FaRecycle className="icon top-left" />
            <FaLeaf className="icon bottom-right" />
            <FaGlobeAmericas className="icon top-right" />
          </IconContainer>
        </StyledImageContainer>
      </StyledHeroContent>
    </StyledHeroSection>
  );
}

const StyledHeroSection = styled(Section)`
  overflow: hidden;
  background: rgb(19, 25, 33);
  background: linear-gradient(
    0deg,
    #1ac760 0%,
    rgba(27, 35, 46, 1) 60%
  );
  width: 100%;
  height: 100%;
  padding-bottom: 0;
`;


const StyledImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  & > img {
    height: 100%;
    width: 90%;
    object-fit: cover;
    object-position: top;
    position: relative;
    z-index: 1;
  }

  @media (max-width: ${Devices.tablet}) {
    & > img {
      height: 100%;
      width: 100%;
    }
  }
`;

const IconContainer = styled.div`
  width: 100%;
  height: 100%;

  .icon {
    color: var(--contrast-color);
    font-size: 8rem;
    position: absolute;
  }

  .top-left {
    top: 10%;
    left: 5%;
    transform: rotate(-20deg);
  }

  .bottom-right {
    bottom: 10%;
    right: 5%;
    transform: rotate(10deg);
    color: var(--primary-color);

  }

  .top-right {
    top: 15%;
    right: 10%;
    transform: rotate(10deg);
    color: var(--contrast-color);
  }

  @media (max-width: ${Devices.tablet}) {
    .icon {
      font-size: 4.5rem;
    }

    .top-left {
      top: 5%;
      left: 3%;
    }

    .bottom-right {
      bottom: 5%;
      right: 3%;
    }

    .top-right {
      top: 10%;
      right: 5%;
    }
  }
`;

const StyledHeroContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  @media (max-width: ${Devices.laptop}) {
    flex-direction: column;
    justify-content: space-around;
    gap: 2rem;
  }
`;

export default HeroSection;
