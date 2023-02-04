import { Route, Routes } from 'react-router-dom';

import Dashboard from './pages/DashboardML/Dashboard';
import Development from './pages/DashboardML/Development';
import Incentives from './pages/DashboardML/Incentives';
import Productivity from './pages/DashboardML/Productivity';
import SetLocalStorage from './pages/login/SetLocalStorage';
import Manage from './pages/Manage/Manage';
import Sub1 from './pages/Manage/sub1/Sub1';
import Sub2 from './pages/Manage/sub2/Sub1';
import PrivateRoute from './routes/PrivateRoute';

const App = () => (
  <div>
    <Routes>
      {/* <Route path="/" element={<PublicRoute />}>
        <Route path="login" element={<Login />} />
      </Route> */}

      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Productivity />} />
          <Route path="incentives" element={<Incentives />} />
          <Route path="development" element={<Development />} />
        </Route>

        <Route path="manage" element={<Manage />} />
        <Route path="manage/sub1" element={<Sub1 />} />
        <Route path="manage/sub2" element={<Sub2 />} />
      </Route>

      <Route path="/setlocalstorage" element={<SetLocalStorage />} />
    </Routes>
  </div>
);

export default App;
