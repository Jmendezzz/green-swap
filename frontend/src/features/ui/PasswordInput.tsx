import { HiEye, HiEyeOff } from 'react-icons/hi';
import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';
import { useState } from 'react';
import Input from './Input';

const PasswordInputWrapper = styled.div`
  position: relative;
  width: 100%;
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
  variant?: 'outlined' | 'non-outlined';
}

function PasswordInput  ({ register, placeholder,variant }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <PasswordInputWrapper>
      <Input variant={variant || 'outlined'} {...register} type={showPassword ? "text" : "password"}  placeholder={placeholder} />
      <PasswordAdornment onClick={togglePasswordVisibility}>
        {showPassword ? <HiEyeOff /> : <HiEye />}
      </PasswordAdornment>
    </PasswordInputWrapper>
  );
}

export default PasswordInput;