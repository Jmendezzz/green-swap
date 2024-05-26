import { useState } from 'react';
import { Tab } from './SidebarTab';
import styled from 'styled-components';

interface TabsProps {
  tabs: Tab[];
}

function Tabs({ tabs }: TabsProps) {
  const [currentTab, setCurrentTab] = useState<Tab>(tabs[0]);

  return (
    <StyledTabs>
      <header>
        <ul>
          {tabs.map((tab) => (
            <li key={tab.id} onClick={() => setCurrentTab(tab)}>
              {tab.name}
            </li>
          ))}
        </ul>
      </header>
      <div>{currentTab.content}</div>
    </StyledTabs>
  );
}


const StyledTabs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
    header {
        display: flex;
        gap: 1rem;
        ul {
        display: flex;
        gap: 1rem;
        li {
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 0.5rem;
            background-color: var(--primary-color-light);
            color: var(--white);
            &:hover {
                font-weight: bold;
            }
        }
        }
    }
  `

export default Tabs;
