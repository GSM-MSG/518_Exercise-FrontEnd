import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Story from './pages/Story';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/story" element={<Story />} />
      </Routes>
    </div>
  );
}

export default App;
