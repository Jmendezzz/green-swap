import ErrorConfirmAccount from '@/features/auth/confirm/ErrorConfirmAccount';
import SuccessConfirmAccount from '@/features/auth/confirm/SuccessConfirmAccount';
import useConfirmAccount from '@/features/auth/confirm/useConfirmAccount';
import Section from '@/features/ui/Section';
import Spinner from '@/features/ui/Spinner';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
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
        {isLoading && <Spinner color="white" />}
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
