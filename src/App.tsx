import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import '@/styles/index.css';
import Home from './pages/Home';
import Test from './pages/Test';

function App() {
  return (
    <Router>
      <div className='min-h-screen'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
