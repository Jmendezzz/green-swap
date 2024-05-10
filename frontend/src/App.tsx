import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import "./index.css"
import { QueryClient, QueryClientProvider } from "react-query"
import GlobalStyles from "./styles/GlobalStyles"
import ToasterStyled from "./features/ui/ToasterStyled"
import SignUp from "./pages/SignUp"
import { ROUTES } from "./constants/routes"
import SendEmailConfirmation from "./pages/SendEmailConfirmation"
import Home from "./pages/Home"
import AppLayout from "./features/ui/AppLayout"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime:0
    },
  },
});

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path={ROUTES.home} element={<Home />} />
          </Route>
          <Route path={ROUTES.login} element={<Login/>} />
          <Route path={ROUTES.signUp} element={<SignUp />} />
          <Route path={ROUTES.sendEmailConfirmation} element={<SendEmailConfirmation/>} />
          <Route path = "*" element={<h1>Not Found</h1>} />
        </Routes>
    </BrowserRouter>
    <ToasterStyled />
    </QueryClientProvider>
    
  )
}

export default App
