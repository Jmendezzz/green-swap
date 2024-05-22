import styled from "styled-components";

const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 4rem;
  background-color: var(--primary-color-light);
  border-radius: 3rem;
  width: 500px;
  padding: 2rem 3rem;
  height: 100%;
  position: sticky;
  top:40px; 
  overflow-y: auto;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export default SidebarMenu;