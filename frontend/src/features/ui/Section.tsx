import { Devices } from "@/styles/Devices"
import styled from "styled-components"

interface Props {
    children: React.ReactNode | React.ReactNode[],
    className?: string
    id?: string
}

function Section({ children, className, id }: Props) {
  return (
    <StyledSection className={className} id={id || undefined}>
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
  min-height: 100%;
  position:relative;
  `

export default Section