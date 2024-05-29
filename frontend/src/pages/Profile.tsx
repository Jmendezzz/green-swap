import Report from '@/features/report/Report';
import useUserById from '@/features/auth/user/useUserById';
import Empty from '@/features/ui/Empty';
import Section from '@/features/ui/Section';
import SidebarMenu from '@/features/ui/SidebarMenu';
import Spinner from '@/features/ui/Spinner';
import StyledLightContainer from '@/features/ui/StyledLightContainer';
import Tabs from '@/features/ui/Tabs';
import UserProfilePicture from '@/features/ui/UserProfilePicture';
import { format } from 'date-fns';
import styled from 'styled-components';
import Modal from '@/features/ui/Modal';
import ReportUserForm from '@/features/report/ReportUserForm';

const tabs = [
  {
    id: 'products',
    name: 'Productos',
    content: <p>Productos publicados</p>,
  },
];
function Profile() {
  const { user, isLoading } = useUserById();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Spinner />
      </div>
    );
  }
  if (!user) {
    return <Empty message="Usuario no encontrado" />;
  }

  return (
    <StyledProfileSection>
      <div className="flex gap-10">
        <SidebarMenu>
          <div className="w-full min-h-[600px] flex items-center">
            <UserProfilePicture user={user} size="xl" />
            <p>
              {user.firstName} {user.lastName}
            </p>
            <p>{user.email}</p>
            <p>Se unió el {format(user.createdAt, 'MM/dd/yyyy')}</p>
          </div>
        </SidebarMenu>

        <StyledLightContainer className="flex flex-col items-center  w-full">
          <Tabs tabs={tabs} />
        </StyledLightContainer>

      </div>
      <Modal>
        <Modal.Open opens='report-user' >
          <Report/>
        </Modal.Open>
        <Modal.Window name='report-user'>
          <ReportUserForm user={user} />
        </Modal.Window>
      </Modal>
    </StyledProfileSection>
  );
}

const StyledProfileSection = styled(Section)`
  background-color: var(--primary-color);
  height: 100%;
`;

export default Profile;
