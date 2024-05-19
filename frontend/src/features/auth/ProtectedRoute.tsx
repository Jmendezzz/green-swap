import { Outlet, useNavigate } from 'react-router-dom';
import { useUserContext } from '@/context/UserContext';
import { useEffect } from 'react';

function ProtectedRoute() {

  const {user} = useUserContext();
  const navigate = useNavigate(); 

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  },[user, navigate]);
  

  return <Outlet />;
}

export default ProtectedRoute;
