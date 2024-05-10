import Section from '@/features/ui/Section';
import styled from 'styled-components';

function Home() {
  return (
    <StyledSection>
      <h1>Home</h1>
    </StyledSection>
  );
}

const StyledSection = styled(Section)`
background: rgb(35,45,59);
background: radial-gradient(circle, rgba(35,45,59,1) 0%, rgba(27,35,46,1) 50%, rgba(27,35,46,1) 100%);
  width: 100%;
  height: 100vh;
`;

export default Home;
