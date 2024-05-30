import { Devices } from '@/styles/Devices';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface SidebarLayoutProps {
  children: ReactNode;
}

interface SidebarProps {
  children: ReactNode;
}

interface MainProps {
  children: ReactNode;
}

function SidebarLayout({ children }: SidebarLayoutProps) {
  return <StyledLayout>{children}</StyledLayout>;
}

function Sidebar({ children }: SidebarProps) {
  return <StyledSidebar>{children}</StyledSidebar>;
}
const Main = ({ children }: MainProps) => {
  return <StyledMain>{children}</StyledMain>;
}

SidebarLayout.Sidebar = Sidebar;
SidebarLayout.Main = Main;

const StyledLayout = styled.div`
  display: flex;
  gap:4rem;
  height: 100%;
  width: 100%;
  @media (max-width: ${Devices.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledSidebar = styled.div`
  background-color: var(--primary-color-light);
  padding: 2rem;
  overflow-y: auto;
  border-radius: 2rem;
  max-width: 400px;
`;

const StyledMain = styled.main`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  background-color: var(--primary-color-light);
  border-radius: 2rem;
`;

export default SidebarLayout;
