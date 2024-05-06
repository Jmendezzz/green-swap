import { HiEye, HiEyeOff } from 'react-icons/hi';
import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';
import { useState } from 'react';

const PasswordInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  padding: 0.8rem 2.5rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  transition: all 0.3s ease;
  border: none;
  width: 100%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: var(--white);
  }
  background-color: transparent;
  border: 1.6px solid var(--white);
`;

const PasswordAdornment = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

interface Props {
  register: UseFormRegisterReturn;
  placeholder: string;
}

function PasswordInput  ({ register, placeholder }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <PasswordInputWrapper>
      <StyledInput {...register} type={showPassword ? "text" : "password"} placeholder={placeholder} />
      <PasswordAdornment onClick={togglePasswordVisibility}>
        {showPassword ? <HiEyeOff /> : <HiEye />}
      </PasswordAdornment>
    </PasswordInputWrapper>
  );
}

export default PasswordInput;