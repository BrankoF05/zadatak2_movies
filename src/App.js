import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./features/movies/slices/movies";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log("state", state.movies.isLoading);

  if (state.movies.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(fetchMovies());
        }}
      >
        Fetch movies
      </button>
      {state.movies.data.results.map((movie) => {
        return <h2>{movie.title}</h2>;
      })}
    </div>
  );
}

export default App;
