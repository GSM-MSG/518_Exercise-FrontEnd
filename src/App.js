import Navbar from './components/Navbar';
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom';
import Story from './pages/Story';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
      </Routes>
    </div>
  );
}

export default App;