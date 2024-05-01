import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import "./index.css"
import { QueryClient, QueryClientProvider } from "react-query"
import GlobalStyles from "./styles/GlobalStyles"

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

        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<Login/>} />

      </Routes>
    </BrowserRouter>

    </QueryClientProvider>
    
  )
}

export default App
