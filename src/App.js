import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Moment from "./pages/Moment";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />}/>
        <Route path="/moment" element={<Moment />} />
      </Routes>
    </div>
  );
}

export default App;
