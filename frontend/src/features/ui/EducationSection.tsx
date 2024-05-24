import styled from 'styled-components';
import Section from './Section';
import Heading from './Heading';
import { FaBoxOpen, FaRecycle } from 'react-icons/fa';
import { GiPineTree } from 'react-icons/gi';

const educationItems = [
  {
    icon: <FaRecycle />,
    title: 'Economia Circular',
    description:
      'La economía circular es un modelo económico que se basa en la sostenibilidad y la reutilización de recursos. En GreenSwap creemos en la economía circular y en la importancia de reducir, reutilizar y reciclar.',
  },
  {
    icon: <GiPineTree />,
    title: 'Impacto Ambiental',
    description:
      'El impacto ambiental de la producción y el consumo de productos es uno de los mayores problemas que enfrenta la humanidad. En GreenSwap queremos reducir el impacto ambiental de la producción y el consumo de productos.',
  },
  {
    icon: <FaBoxOpen />,
    title: 'Reutilización de Productos',
    description:
      'La reutilización de productos es una forma de reducir el impacto ambiental de la producción y el consumo de productos. En GreenSwap promovemos la reutilización de productos.',
  },
];

function EducationSection() {
  return (
    <StlyedEducationSection>
      <StyledEducationContent>
        <header className="flex flex-col items-center">
          <Heading className="text-primary" type="h1">
            ¿Por qué <span className="text-white">Green Swap?</span>
          </Heading>
          <p className="text-4xl text-center">
            Nuestro objetivo es crear una comunidad que promueva la
            sostenibilidad y el intercambio de productos.
          </p>
        </header>

        <section className="flex flex-row justify-center gap-10 flex-wrap w-full">
          {educationItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-10  bg-primary-light p-10  rounded-3xl w-full shadow-2xl"
            >
              <header className='w-[300px]'>
                <Heading type="h2" className="text-contrast">
                  {item.title}
                </Heading>
                <div className="flex items-center justify-center  text-contrast rounded-full text-center text-[100px]">
                  {item.icon}
                </div>
              </header>

              <p className='w-[70%]'>{item.description}</p>
            </div>
          ))}
        </section>
      </StyledEducationContent>
    </StlyedEducationSection>
  );
}

const StlyedEducationSection = styled(Section)`
  padding-top: 50px;
  background: rgb(19, 25, 33);
  background: linear-gradient(0deg, rgba(27, 35, 46, 1) 30%, #1ac760 100%);
  width: 100%;
  padding-bottom: 5rem;
  gap: 5rem;
`;

const StyledEducationContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;

export default EducationSection;
