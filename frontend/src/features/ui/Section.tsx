import { Devices } from "@/styles/Devices"
import styled from "styled-components"

interface Props {
    children: React.ReactNode | React.ReactNode[],
    className?: string
}

function Section({ children, className }: Props) {
  return (
    <StyledSection className={`w-full h-screen overflow-y-auto px-10 py-10 ${className}`}>
        <StyledSecytionContent>
            {children}
        </StyledSecytionContent>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding:5rem 2rem;
`
const StyledSecytionContent = styled.div`
  width: 100%;
  max-width: ${Devices.desktop};
  `

export default Section