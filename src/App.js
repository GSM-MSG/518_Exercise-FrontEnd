
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Moment from "./pages/Moment";
import Quiz from "./pages/Quiz";
import Story from './pages/Story';

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />}/>
        <Route path="/moment" element={<Moment />} />
        <Route path="/story" element={<Story />} />
      </Routes>
    </div>
  );
}

export default App;