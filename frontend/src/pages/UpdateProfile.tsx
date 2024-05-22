import UpdateProfileSidebar from "@/features/auth/user/UpdateProfileSidebar";
import Section from "@/features/ui/Section";
import styled from "styled-components";

function UpdateProfile() {
  return (
    <StyledSection>
        <UpdateProfileSidebar />
    </StyledSection>
  )
}

const StyledSection = styled(Section)`
  min-height: 100%;
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
`;
export default UpdateProfile