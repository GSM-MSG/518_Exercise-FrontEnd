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
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/story" element={<Story />} />
      </Routes>
=======
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/moment" element={<Moment />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
>>>>>>> 5b47a4600dccac9433f4b83f915672e0409c44fb
    </div>
  );
}

export default App;
