import { Outlet, useNavigate } from 'react-router-dom';
import { useUserContext } from '@/context/UserContext';
import { ROUTES } from '@/constants/routes';
import { useEffect } from 'react';

function ProtectedRoute() {
  const { user } = useUserContext();
  console.log('user', user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      console.log('No user');
      navigate(ROUTES.login);
    }
  }, [user, navigate]);

  return user ? <Outlet /> : null;
}

export default ProtectedRoute;
