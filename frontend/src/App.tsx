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
import ProductDetail from './pages/ProductDetail';
import CreateProduct from './pages/CreateProduct';
import ProtectedRoute from './features/auth/ProtectedRoute';
import AnonymousRoute from './features/ui/AnonymousRoute';
import ConfirmAccount from './pages/ConfirmAccount';
import UpdateProfile from './pages/UpdateProfile';
import CreateExchange from './pages/CreateExchange';
import Profile from './pages/Profile';
import MyExchanges from './pages/MyExchanges';

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
              <Route path={`${ROUTES.userProfile}/:userId`} element={<Profile />} />

              {/* Protected Routes */}
              <Route element={<ProtectedRoute />}>

                <Route
                  path={ROUTES.createProducts}
                  element={<CreateProduct />}
                />

                <Route
                  path={ROUTES.updateProfile}
                  element={<UpdateProfile />}
                />

                <Route
                  path={`${ROUTES.createExchange}/:productId`}
                  element={<CreateExchange />}
                />

                <Route path={ROUTES.myExchanges} element={<MyExchanges />} />

              </Route>
              <Route
                path={ROUTES.confirmAccount}
                element={<ConfirmAccount />}
              />
              <Route
                path={ROUTES.sendEmailConfirmation}
                element={<SendEmailConfirmation />}
              />
            </Route>
            {/*Anonymous Routes */}
            <Route element={<AnonymousRoute />}>
              <Route path={ROUTES.login} element={<Login />} />
              <Route path={ROUTES.signUp} element={<SignUp />} />
            </Route>
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
      <ToasterStyled />
    </QueryClientProvider>
  );
}

export default App;
