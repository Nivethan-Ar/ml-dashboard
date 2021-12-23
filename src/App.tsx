import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Page1 from './pages/Page1';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/page1" element={<Page1 />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
