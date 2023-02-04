// import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

// import { Rootstate } from '../app/store';

const PrivateRoute = () => {
  const location = useLocation();

  // const user = useSelector((state:Rootstate) => state.userAuth.user);
  const user = true;

  return user
    ? <Outlet />
    : <Navigate to="/login" replace state={{ from: location }} />;
};

export default PrivateRoute;
