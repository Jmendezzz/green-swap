import { motion } from "framer-motion"
import ReactDOM from "react-dom"
import styled from "styled-components"
import Spinner from "./Spinner"

function FullScreenSpinner() {
  return (
    ReactDOM.createPortal(
        <FullScreenContainer
        >
            <Spinner color="#1AC760"  size='xl'  />
        </FullScreenContainer>,
        document.body
        )
  )
}

const FullScreenContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: rgb(27,35,46);
background: radial-gradient(circle, rgba(27,35,46,1) 28%, rgba(43,54,72,1) 65%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  `

export default FullScreenSpinner