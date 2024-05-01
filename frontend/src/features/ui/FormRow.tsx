import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  error: string | undefined;
}
function FormRow({ children, error }: Props) {
  return (
    <StyledFormRow error={error} className='space-y-3'>
      {children}
      {error && <span>{error}</span>}
    </StyledFormRow>
  );
}

const StyledFormRow = styled.div<{ error: string | undefined }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1.4rem;
  ${(props) => props.error && `color: var(--red);`}
  ${(props) => props.error && ` & > input {border: 1px solid var(--red);}`}
`;

export default FormRow;
