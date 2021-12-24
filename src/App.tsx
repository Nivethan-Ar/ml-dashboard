import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Body from './layouts/Body';
import Dashboard from './pages/DashboardML/Dashboard';
import Manage from './pages/Manage/Manage';

const App = () => (
  <BrowserRouter>
    <Body>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/manage" element={<Manage />} />
      </Routes>
    </Body>
  </BrowserRouter>
);

export default App;
