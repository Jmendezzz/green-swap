import { HiArrowNarrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function GoBackButton() {
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate(-1);
  };
  return <StyledGoBackButton onClick={goBackHandler} />;
}
const StyledGoBackButton = styled(HiArrowNarrowLeft)`
  font-size: 4rem;
  cursor: pointer;
  color: var(--white);
  transition: transform 0.3s;
  position: absolute;
  top: -4rem;
  left: 1rem;

  &:hover {
    transform: scale(1.1);
  }
`;

export default GoBackButton;
