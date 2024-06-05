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
import useUserProductsById from '@/features/product/useUserProductsById';
import List from '@/features/ui/List';
import ProductItemCard from '@/features/product/ProductItemCard';

function Profile() {
  const { user, isLoading } = useUserById();

  const { data, isLoading: isLoadingUserProducts, pageable, setPageable } = useUserProductsById();
  const setPage = (page: number) => {
    setPageable({ ...pageable, page });
  };

  if (isLoading && isLoadingUserProducts) {
    return (
      <div className="flex items-center justify-center w-full h-full  bg-primary">
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
          <Tabs
            tabs={[
              {
                id: 'products',
                name: 'Productos',
                content: (
                  <>
                    <List>
                      <List.Items
                        isLoading={isLoading}
                        data={data?.content}
                        render={(product) => (
                          <ProductItemCard size='sm' key={product.id} product={product} />
                        )}
                      />
                      <List.Pagination
                        pageable={pageable}
                        totalPages={data?.totalPages}
                        setPage={setPage}
                      />
                    </List>
                  </>
                ),
              },
            ]}
          />
        </StyledLightContainer>
      </div>
      <Modal>
        <Modal.Open opens="report-user">
          <Report />
        </Modal.Open>
        <Modal.Window name="report-user">
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
