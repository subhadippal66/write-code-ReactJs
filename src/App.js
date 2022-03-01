import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './component';
import {Homepage, PostDetails} from './pages';

function App() {
  return (
    <div className="App">
      <Layout key={76}>
        <Routes>
          <Route path="/" key={12} element={<Homepage />} />
          <Route path='/post/:post' key={13} element={<PostDetails />} />
          <Route path='*' key={14} element={<div>error 404</div>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
