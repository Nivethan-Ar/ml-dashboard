/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/DashboardML/Dashboard';
import Manage from './pages/Manage/Manage';
import Login from './pages/login/Login';
import PrivateRoute from './routes/PrivateRoute';
import SetLocalStorage from './pages/login/SetLocalStorage';
import PublicRoute from './routes/PublicRoute';
import Sub1 from './pages/Manage/sub1/Sub1';
import Sub2 from './pages/Manage/sub2/Sub1';

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
        {/* <Route index element={<Manage />} /> */}
        <Route path="manage/sub1" element={<Sub1 />} />
        <Route path="sub2" element={<Sub2 />} />

      </Route>

      <Route path="/setlocalstorage" element={<SetLocalStorage />} />
    </Routes>
  </div>
);

export default App;
