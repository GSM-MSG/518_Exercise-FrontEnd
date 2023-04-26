
<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Moment from "./pages/Moment";
import Quiz from "./pages/Quiz";
=======
>>>>>>> d2bd117d018ea58a4704ab418ff97c68e3f41d46
import Story from './pages/Story';

function App() {
  return (
<<<<<<< HEAD
    <div>
      {/* <Navbar /> */}
=======
    <div className="App">
>>>>>>> d2bd117d018ea58a4704ab418ff97c68e3f41d46
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