import React, { useState } from 'react';
import styled from 'styled-components';
import SidebarMenu from './SidebarMenu';
import StyledLightContainer from './StyledLightContainer';
import { Devices } from '@/styles/Devices';
interface Tab {
  id: string;
  name: string;
  content: React.ReactNode;
}

interface SidebarTabProps {
  tabs: Tab[];
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

function SidebarTab({ tabs, header, footer }: SidebarTabProps) {
  const [currentTab, setCurrentTab] = useState<Tab>(tabs[0]);
  return (
    <StyledSidebarContent>
      <StyledSideBarMenu>
        <header>{header}</header>
        <StyledSidebarItems>
          {tabs.map((tab) => (
            <StyledSidebarItem
              key={tab.id}
              onClick={() => setCurrentTab(tab)}
              isActive={tab.id === currentTab.id}
            >
              {tab.name}
            </StyledSidebarItem>
          ))}
        </StyledSidebarItems>
        <footer className="absolute bottom-0 py-10">{footer}</footer>
      </StyledSideBarMenu>

      <StyledLightContainer className="w-full h-full">
        {currentTab.content}
      </StyledLightContainer>
    </StyledSidebarContent>
  );
}

const StyledSidebarItems = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;

  cursor: pointer;
  @media (min-width: ${Devices.tablet}) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;
  }
`;

const StyledSidebarItem = styled.li<{ isActive: boolean }>`
text-align: center;
  background-color: var(--primary-color);
  padding: 1rem;
  border-radius: 1.5rem;
  font-size: 1.4rem;
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

  @media (min-width: ${Devices.tablet}) {
    padding: 3rem 1rem;
    font-size: 2rem;
  }
`;

const StyledSidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 2rem;
  @media (min-width: ${Devices.tablet}) {
    flex-direction: row;
    padding: 2rem;
  }
`;
const StyledSideBarMenu = styled(SidebarMenu)`
  @media (max-width: ${Devices.tablet}) {
    flex-direction: row;
    padding: 2rem;
    width: 100%;
    max-height: 15%;
    position: relative;
    top: 0;
    & > header {
      display: none;
    }
    & > footer {
      display: none;
    }
  }
`;

export default SidebarTab;
