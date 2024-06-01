import styled from 'styled-components';
import Section from './Section';
import Heading from './Heading';


const steps = [
  {
    title: 'Regístrate',
    description:
      'Crea una cuenta en GreenSwap para empezar a intercambiar productos.',
  },
  {
    title: 'Publica un Producto',
    description:
      'Publica un producto que ya no uses para que otros usuarios puedan intercambiarlo.',
  },
  {
    title: 'Intercambia Productos',
    description:
      'Busca productos que te interesen y propón un intercambio con otros usuarios.',
  },
  {
    title: 'Acuerda un Intercambio',
    description:
      'Acuerda un intercambio con otro usuario y coordina la entrega de los productos.',
  },
  {
    title: '¡Listo!',
    description: '¡Ya estás listo para intercambiar productos en GreenSwap!',
  },
];
function StepGuideSection() {
  return (
    <StyledStepGuideSection>
      <div>
        <Heading type="h1">
          ¿Cómo <span className="text-contrast">funciona?</span>
        </Heading>
        <StyledStepsContainer>
          {steps.map((step, index) => (
            <>
              {index % 2 === 0 ? (
                <StyledStep key={index}>
                  <StyledStepInfo>
                    <span>{index + 1}</span>
                    <Heading type="h2" className="text-contrast">
                      {step.title}
                    </Heading>
                    <p>{step.description}</p>
                  </StyledStepInfo>
                  {step.icon}
                </StyledStep>
              ) : (
                <StyledStep key={index}>
                    {step.icon}
                  <StyledStepInfo>
                    <span>{index + 1}</span>
                    <Heading type="h2" className="text-contrast">
                      {step.title}
                    </Heading>
                    <p>{step.description}</p>
                  </StyledStepInfo>
                </StyledStep>
              )}
            </>
          ))}
        </StyledStepsContainer>
      </div>
    </StyledStepGuideSection>
  );
}

const StyledStepGuideSection = styled(Section)`
  background-color: var(--primary-color);
`;

const StyledStepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const StyledStep = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 1rem;
  padding: 2rem;
  border-radius: 1rem;
`;

const StyledStepInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  & span {
    font-size: 3rem;
    font-weight: 800;
    background-color: var(--contrast-color);
    color: var(--primary-color);
    padding: 0.4rem 2rem;
    border-radius: 50%;
  }
`;
export default StepGuideSection;
