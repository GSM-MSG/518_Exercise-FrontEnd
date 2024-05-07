import {Route, Routes, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Story from './pages/Story';
import NotFound from './pages/NotFound';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
