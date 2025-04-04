import "./App.css";
import MoviesContainer from "./features/movies/components/MoviesContainer";
import { BrowserRouter as Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MoviesContainer />
      <Routes>
        <Route path="/" element={<MoviesContainer />} />
        {/* <Route path="/posts/:id" element={<Movi />} /> */}
      </Routes>
    </div>
  );
}

export default App;
