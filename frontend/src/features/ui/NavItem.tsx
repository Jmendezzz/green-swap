import styled from "styled-components"

function NavItem({children}: {children: React.ReactNode}) {
  return (
    <StyledNavItem>
        {children}
        
    </StyledNavItem>
  )
}

const StyledNavItem = styled.li`
    transition: all 0.3s ease;
    cursor: pointer;
    padding: 1rem 2rem;
    &:hover{
        background-color: var(--primary-color-light);
    }
    border-radius: 1rem;
`

export default NavItem