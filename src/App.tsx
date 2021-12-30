/* eslint-disable @typescript-eslint/no-unused-vars */
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/DashboardML/Dashboard';
import Manage from './pages/Manage/Manage';
import Login from './pages/login/Login';
import PrivateRoute from './routes/PrivateRoute';

const App = () => (
  <div>
    <Routes>
      {/* <Route path="/" element={<Navigate replace to="login" />} /> */}
      <Route path="/login" element={<Login />} />

      {/* create private outlet and nest other routes inside except login */}
      <Route path="/" element={<PrivateRoute />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="manage" element={<Manage />} />
      </Route>

    </Routes>
  </div>
);

export default App;
