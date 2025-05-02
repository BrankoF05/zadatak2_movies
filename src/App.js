import "./App.css";
import MovieContainer from "./features/movie/components/MovieContainer";
import MoviesContainer from "./features/movies/components/MoviesContainer";
import { Route, Routes } from "react-router-dom";
import ListContainer from "./features/list/components/ListContainer";
import LoginContainer from "./features/login/components/LoginContainer";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MoviesContainer />} />
        <Route path="/movie/:id" element={<MovieContainer />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/list" element={<ListContainer />} />
      </Routes>
    </div>
  );
}

export default App;
