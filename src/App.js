import "./App.css";
import MovieContainer from "./features/movie/components/MovieContainer";
import MoviesContainer from "./features/movies/components/MoviesContainer";
import Login from "./features/login/components/Login";
import { Route, Routes } from "react-router-dom";
import List from "./features/list/components/List";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MoviesContainer />} />
        <Route path="/movie/:id" element={<MovieContainer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
