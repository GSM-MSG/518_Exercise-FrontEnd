import {Route, Routes} from 'react-router-dom';

import Story from './pages/Story';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/story" element={<Story />} />
      </Routes>
    </div>
  );
}

export default App;
