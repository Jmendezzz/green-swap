import { useLogin } from "@/features/auth/useLogin";
import Heading from "@/features/ui/Heading"
import Row from "@/features/ui/Row"
import Section from "@/features/ui/Section"
import { loginService } from "@/services/authService";
import { useState } from "react";

function Login() {
    const {login, isLoading} = useLogin();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        loginService(email, password).then(res=> console.log(res)).catch(err=> console.error(err.message));
    }
  return (
    <Section>
        <Row type="vertical">
            <Heading type="h1">Login</Heading>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" onChange={e=> setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
                <button disabled={isLoading}>Login</button>
            </form>

        </Row>
    </Section>
  )
}

export default Login