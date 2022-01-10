import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import SetLocalStorage from './pages/login/SetLocalStorage';
import Dashboard from './pages/DashboardML/Dashboard';
import Manage from './pages/Manage/Manage';
import Login from './pages/login/Login';
import Sub1 from './pages/Manage/sub1/Sub1';
import Sub2 from './pages/Manage/sub2/Sub1';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<PublicRoute />}>
        <Route path="login" element={<Login />} />
      </Route>

      <Route path="/" element={<PrivateRoute />}>
        <Route path="dashboard" element={<Dashboard />} />

        <Route path="manage" element={<Manage />} />
        <Route path="manage/sub1" element={<Sub1 />} />
        <Route path="manage/sub2" element={<Sub2 />} />
      </Route>

      <Route path="/setlocalstorage" element={<SetLocalStorage />} />
    </Routes>
  </div>
);

export default App;
