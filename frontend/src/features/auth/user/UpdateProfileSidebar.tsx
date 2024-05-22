import Heading from '@/features/ui/Heading';
import SidebarMenu from '@/features/ui/SidebarMenu';
import { useState } from 'react';
import { HiLogout } from 'react-icons/hi';
import styled from 'styled-components';

const tabs = [
  {
    id: 'personal',
    name: 'Información personal',
  },
  {
    id: 'security',
    name: 'Seguridad',
  },
];

function UpdateProfileSidebar() {

  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const handleTabChange = (tab: {id:string, name:string}) => {
    setCurrentTab(tab);
  };
  return (
    <SidebarMenu>
      <Heading type="h2">Configuración de la cuenta</Heading>
      <StyledSidebarItems>
        {tabs.map((tab) => (
          <StyledSidebarItem
            key={tab.id}
            isActive={tab.id === currentTab.id}
            onClick={() => handleTabChange(tab)}
          >
            {tab.name}
          </StyledSidebarItem>
        ))}
      </StyledSidebarItems>
      <footer>
        <div className="flex items-center gap-5 cursor-pointer">
          <HiLogout size={20} />
          <span>Cerrar sesión</span>
        </div>
      </footer>
    </SidebarMenu>
  );
}

const StyledSidebarItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  & > li {
  }
`;

const StyledSidebarItem = styled.li<{ isActive: boolean }>`
  background-color: var(--primary-color);
  padding: 3rem 1rem;
  font-size: 2rem;
  border-radius: 1.5rem;
  color: var(--white);
  transition: all 0.2s;
  ${(props) =>
    props.isActive &&
    'font-weight: 800; box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2); color: white; '}
  &:hover {
    color: white;
    font-weight: 800;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default UpdateProfileSidebar;
