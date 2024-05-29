import { Devices } from "@/styles/Devices"
import styled from "styled-components"

interface Props {
    children: React.ReactNode | React.ReactNode[],
    className?: string
}

function Section({ children, className }: Props) {
  return (
    <StyledSection className={className}>
        <StyledSecytionContent>
            {children}
        </StyledSecytionContent>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  padding:2rem 2rem;
`
const StyledSecytionContent = styled.div`
  width: 100%;
  max-width: ${Devices.desktop};
  position:relative;
  `

export default Section