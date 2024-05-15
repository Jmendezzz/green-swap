import { Devices } from "@/styles/Devices"
import styled from "styled-components"

interface Props {
    children: React.ReactNode | React.ReactNode[],
    className?: string
}

function Section({ children, className }: Props) {
  return (
    <StyledSection className={`w-full h-full overflow-y-auto px-7 py-10 ${className}`}>
        <StyledSecytionContent>
            {children}
        </StyledSecytionContent>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding:4rem 2rem;
`
const StyledSecytionContent = styled.div`
  width: 100%;
  max-width: ${Devices.desktop};
  position:relative;
  `

export default Section