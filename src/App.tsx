/* eslint-disable @typescript-eslint/no-unused-vars */
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/DashboardML/Dashboard';
import Manage from './pages/Manage/Manage';
import Login from './pages/login/Login';
import PrivateRoute from './routes/PrivateRoute';
import SetLocalStorage from './pages/login/SetLocalStorage';
import PublicRoute from './routes/PublicRoute';

const App = () => (
  <div>
    <Routes>
      {/* <Route path="/" element={<Navigate replace to="login" />} /> */}

      <Route path="/" element={<PublicRoute />}>
        <Route path="login" element={<Login />} />
      </Route>

      {/* create private outlet and nest other routes inside except login */}
      <Route path="/" element={<PrivateRoute />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="manage" element={<Manage />} />
      </Route>

      <Route path="/setlocalstorage" element={<SetLocalStorage />} />
    </Routes>
  </div>
);

export default App;
