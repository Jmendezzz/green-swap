import styled from "styled-components";
import Row from "./Row";
import { Devices } from "@/styles/Devices";

const AuthFormContainer = styled(Row)`
  background-color: #212b38;
  background-color: rgba(33, 43, 56, 0.5);
  width: 100%;
  gap: 2rem;
  height:50%;
  max-height: 700px;
  max-width: 700px;
  min-width: 300px;
  padding: 5rem 3rem;
  border-radius: 2.5rem;
  box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.2);

  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${Devices.tablet}) {
    width: 90%;
    padding: 4rem 2rem;
    font-size: 1.3rem;
  }
  @media (max-width: ${Devices.laptop}) {
    width: 70%;
    padding: 4rem 2rem;
  }
  `

  export default AuthFormContainer;

