import React, { useState } from 'react';
import styled from 'styled-components';
import SidebarMenu from './SidebarMenu';
import StyledLightContainer from './StyledLightContainer';
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
    <div className="w-full h-full flex gap-10">
      <SidebarMenu>
        <div>{header}</div>
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
        <div className='absolute bottom-0 py-10'>{footer}</div>
      </SidebarMenu>

      <StyledLightContainer className="w-full h-full">
        {currentTab.content}
      </StyledLightContainer>
    </div>
  );
}

export const StyledSidebarItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  cursor: pointer;
  & > li {
  }
`;

export const StyledSidebarItem = styled.li<{ isActive: boolean }>`
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
export default SidebarTab;
