import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import '@/styles/index.css';
import { MainLayout } from './components/layouts/MainLayout';
import Home from './pages/Home';
import Test from './pages/Test';
import { ThemeProvider } from './providers/ThemeProvider';
function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
