import { Outlet, useNavigate } from 'react-router-dom';
import FullScreenSpinner from '../ui/FullScreenSpinner';
import useUser from './user/useUser';

function ProtectedRoute() {
  const { user, isLoading } = useUser();
  const navigate = useNavigate();
  
  if (isLoading) {
    return <FullScreenSpinner />;
  }
  
  if (!user) {
    navigate('/login');
    return;
  }

  return <Outlet />;
}

export default ProtectedRoute;
