import {Route, Routes} from 'react-router-dom';

import Navbar from './components/Navbar';
import Story from './pages/Story';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/story" element={<Story />} />
      </Routes>
    </div>
  );
}

export default App;
