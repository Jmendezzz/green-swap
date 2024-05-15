import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyles from './styles/GlobalStyles';
import ToasterStyled from './features/ui/ToasterStyled';
import SignUp from './pages/SignUp';
import { ROUTES } from './constants/routes';
import SendEmailConfirmation from './pages/SendEmailConfirmation';
import Home from './pages/Home';
import AppLayout from './features/ui/AppLayout';
import Products from './pages/Products';
import { UserContextProvider } from './context/UserContext';
import ProductDetail from './features/product/ProductDetail';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <BrowserRouter>
        <UserContextProvider>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path={ROUTES.home} element={<Home />} />
              <Route path={ROUTES.products} element={<Products />} />
              <Route
                path={`${ROUTES.products}/:productId`}
                element={<ProductDetail />}
              />
            </Route>
            <Route path={ROUTES.login} element={<Login />} />
            <Route path={ROUTES.signUp} element={<SignUp />} />
            <Route
              path={ROUTES.sendEmailConfirmation}
              element={<SendEmailConfirmation />}
            />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
      <ToasterStyled />
    </QueryClientProvider>
  );
}

export default App;
