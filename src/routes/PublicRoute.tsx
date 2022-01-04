import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { Rootstate } from '../app/store';

const PublicRoute = () => {
  const user = useSelector((state:Rootstate) => state.userAuth.user);

  return user ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default PublicRoute;
