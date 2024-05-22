import ErrorConfirmAccount from '@/features/auth/confirm/ErrorConfirmAccount';
import SuccessConfirmAccount from '@/features/auth/confirm/SuccessConfirmAccount';
import useConfirmAccount from '@/features/auth/confirm/useConfirmAccount';
import Section from '@/features/ui/Section';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import styled from 'styled-components';

function ConfirmAccount() {
  const { confirmAccount, isLoading, error } = useConfirmAccount();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    if (token) {
      confirmAccount(token);
    }
  }, []);

  return (
    <StyledSection>
        {isLoading && <ClipLoader color="white" />}
        {error && <ErrorConfirmAccount error={error} />}
        {!isLoading && !error && <SuccessConfirmAccount />}
    </StyledSection>
  );
}
const StyledSection = styled(Section)`
  height: 100%;
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;

`;

export default ConfirmAccount;
