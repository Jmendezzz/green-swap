import styled from 'styled-components';
import Section from './Section';
import Heading from './Heading';
import Button from './Button';
import heroImage from '../../assets/hero-image.png';
import { Devices } from '@/styles/Devices';

function HeroSection() {
  return (
    <StyledHeroSection>
      <StyledHeroContent>
        <header className="flex w-full flex-col">
          <div className='w-[100%] space-y-4 flex flex-col justify-center'>
            <Heading type="h1" align="left">
              Intercambia productos para un{' '}
              <span className="text-contrast">Futuro Sostenible</span>
            </Heading>
            <p>
              ¡Cambia lo que tienes por lo que necesitas y haz del mundo un
              lugar más verde! ¡Únete a nosotros!
            </p>
            <div className='flex justify-center'>
                <Button variant="primary">Ver Productos</Button>
            </div>
          </div>
        </header>
        <div className='w-full h-full'>
        <StyledImage src={heroImage} alt="" />
        </div>
      </StyledHeroContent>
    </StyledHeroSection>
  );
}

const StyledHeroSection = styled(Section)`
  overflow-y: hidden;
  background: rgb(19, 25, 33);
  background: linear-gradient(
    0deg,
    rgba(19, 25, 33, 1) 0%,
    rgba(27, 35, 46, 1) 69%
  );
  width: 100%;
  min-height: 90vh;
  padding-bottom: 0;
  @media (max-width: ${Devices.tablet}) {
    height: 100vh;
  
  }
`;
const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    position:block;
    @media (max-width: ${Devices.tablet}){
        height: 90%;
        width: 100%;
    }
`

const StyledHeroContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    @media (max-width: ${Devices.laptop}){
        flex-direction: column;
        justify-content: space-around;
        gap: 2rem;
    }

`
export default HeroSection;
