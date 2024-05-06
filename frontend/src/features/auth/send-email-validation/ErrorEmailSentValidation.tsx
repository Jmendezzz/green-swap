import Button from "@/features/ui/Button"
import Heading from "@/features/ui/Heading";
import Row from "@/features/ui/Row";
import { HiOutlineMail } from "react-icons/hi";
import styled from "styled-components";
interface Props{
  onRetry:()=>void;
}
function ErrorEmailSentValidation({onRetry}:Props) {
  return (
    <StyledContainer type="vertical" className="shadow-lg">
        <header className="flex flex-col items-center">
           <Heading >Error al enviar el correo electronico</Heading>
           <HiOutlineMail size={150}/>
        </header>
        <Row type="vertical">
        <p >
            Hubo un error al enviar el correo electronico. Por favor intenta de nuevo.
        </p>
            <Button variant="primary" onClick={onRetry}>Re-enviar correo</Button>
        </Row>

        
    </StyledContainer>
  )
}

const StyledContainer = styled(Row)`
  padding: 7rem 5rem;
  border-radius: 3rem;
  background-color: #212b38;
  background-color: rgba(33, 43, 56, 0.5);
  width: 50%;
  max-width: 700px;

`
export default ErrorEmailSentValidation