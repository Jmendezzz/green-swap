import  { createContext, useContext, useState, ReactNode } from 'react';
import styled from 'styled-components';

interface TabContextType {
  currentTab: string | null;
  handleTabChange: (tabId: string) => void;
}

const TabContext = createContext<TabContextType>({
  currentTab: null,
  handleTabChange: () => {}, 
});

interface TabsProps {
  children: ReactNode;
}

function Tabs({ children }: TabsProps) {
  const [currentTab, setCurrentTab] = useState<string | null>(null);
  const handleTabChange = (tabId: string) => setCurrentTab(tabId);

  return (
    <TabContext.Provider value={{ currentTab, handleTabChange }}>
      {children}
    </TabContext.Provider>
  );
}

interface TabProps {
  id: string;
  name: string;
}

Tabs.Tab = function Tab({ id, name }: TabProps) {
  const { currentTab, handleTabChange } = useContext(TabContext);
  const isActive = id === currentTab;

  return (
    <StyledSidebarItem
      key={id}
      isActive={isActive}
      onClick={() => handleTabChange(id)}
    >
      {name}
    </StyledSidebarItem>
  );
};

interface PanelProps {
  id: string;
  children: ReactNode;
}
Tabs.Panel = function Panel({ id, children }: PanelProps) {
    const { currentTab } = useContext(TabContext) || {}; 
    return currentTab === id ? <div>{children}</div> : null;
};



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

export default Tabs;