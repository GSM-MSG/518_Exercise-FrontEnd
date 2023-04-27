import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Moment from './pages/Moment';
import Quiz from './pages/Quiz';
import Story from './pages/Story';
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/moment" element={<Moment />} />
        <Route path="/story" element={<Story />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
