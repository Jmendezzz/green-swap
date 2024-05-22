import { ROUTES } from "@/constants/routes"
import Button from "@/features/ui/Button"
import Heading from "@/features/ui/Heading"
import Row from "@/features/ui/Row"
import { HiCheckCircle } from "react-icons/hi"
import { Link } from "react-router-dom"

function SuccessConfirmAccount() {
  return (
    <Row type="vertical">
        <header>
            <Heading type="h1">¡Cuenta confirmada!</Heading>
        </header>
        <HiCheckCircle className="text-green-500" size={150}/>
        <p className="text-5xl">¡Tu cuenta ha sido confirmada exitosamente!</p>
        <Link to={ROUTES.home}>
            <Button variant="primary">Ir al inicio</Button>
        </Link>
    </Row>
  )
}

export default SuccessConfirmAccount