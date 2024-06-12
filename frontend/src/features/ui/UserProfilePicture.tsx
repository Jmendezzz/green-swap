import { BasicInfoUserDTO } from '@/domain/user/BasicInfoUserDTO';
import styled from 'styled-components';

interface Props{
  user: BasicInfoUserDTO;
  size?: 'xsm' | 'sm' | 'lg' | 'xl';

}

function UserProfilePicture({ user, size = 'sm' }: Props) {
  const { urlProfilePicture } = user;
  return (
    <StyledUserProfilePicture size={size}>
      {user.urlProfilePicture ? (
        <StyledImageContainer>
          <img src={urlProfilePicture} alt="Foto de perfil" />
        </StyledImageContainer>
      ) : (
        <div>
          <h1 className="select-none">
            {user.firstName.charAt(0)}
            {user.lastName.charAt(0)}
          </h1>
        </div>
      )}
    </StyledUserProfilePicture>
  );
}
interface StyledProps {
  size: 'xsm' | 'sm' | 'lg' | 'xl';
}

const StyledUserProfilePicture = styled.div<StyledProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: ${({ size }) => {
    switch (size) {
      case 'xsm':
        return '25px';
      case 'sm':
        return '50px';
      case 'lg':
        return '100px';
      case 'xl':
        return '150px';
      default:
        return '50px';
    }
  }};
  height: ${({ size }) => {
    switch (size) {
      case 'xsm':
        return '25px';
      case 'sm':
        return '50px';
      case 'lg':
        return '100px';
      case 'xl':
        return '150px';
      default:
        return '50px';
    }
  }};
  background-color: var(--primary-color-light);
  font-size: ${({ size }) => {
    switch (size) {
      case 'xsm':
        return '1rem';
      case 'sm':
        return '2rem';
      case 'lg':
        return '4rem';
      case 'xl':
        return '6rem';
      default:
        return '2rem';
    }
  }};
  cursor: pointer;
  h1 {
    width: 100%;
    height: 100%;
    display: flex;
  }
`;

const StyledImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
export default UserProfilePicture;
