import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import "./index.css"
import { QueryClient, QueryClientProvider } from "react-query"

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
