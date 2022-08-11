import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import './styles/styles.css';
import Home  from './pages/Home';
import paths from './paths/paths.js';

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout /> } >
          <Route index element={ <Home /> } />
          { paths.map(p => <Route key={p.path} path={p.path} element={p.element} />) }
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Application;
