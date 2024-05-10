import styled from "styled-components"
import useUser from "../auth/user/useUser"
import Logo from "./Logo"

function Nav() {
  const { user,isLoading } = useUser()
  return (
    <StyledNav>
        <ul className="">
            <Logo />
            <div>
                {isLoading && <p>Loading...</p>}
                {user && <p>{user.fullName}</p>}
                {!user && <p>Log in</p>}
            </div>
        </ul>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
    width:100%;
    background-color: #333;
`

export default Nav