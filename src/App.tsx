import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import '@/styles/index.css';
import { MainLayout } from './components/layouts/MainLayout';
import { Home, Test, Todo, Posts, Post } from './pages';
import { ThemeProvider } from './providers/ThemeProvider';

const router = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
};

function App() {
  return (
    <ThemeProvider>
      <Router future={router.future}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/posts/:category" element={<Posts />} />
            <Route path="/posts/:category/:slug" element={<Post />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
