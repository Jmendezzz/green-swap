import ReactDOM from "react-dom"
import { ClipLoader } from "react-spinners"
import styled from "styled-components"

function FullScreenSpinner() {
  return (
    ReactDOM.createPortal(
        <FullScreenContainer >
            <ClipLoader color="white" size={150}  />
        </FullScreenContainer>,
        document.body
        )
  )
}

const FullScreenContainer = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(27, 35, 46, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  `

export default FullScreenSpinner