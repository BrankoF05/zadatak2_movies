import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Loading from "./components/Loading";

const LazyMovies = React.lazy(() =>
  import("./features/movies/components/MoviesContainer")
);
const LazyMovie = React.lazy(() =>
  import("./features/movie/components/MovieContainer")
);
const LazyLogin = React.lazy(() =>
  import("./features/login/components/LoginContainer")
);
const LazyList = React.lazy(() =>
  import("./features/list/components/ListContainer")
);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <LazyMovies />
            </Suspense>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <Suspense fallback={<Loading />}>
              <LazyMovie />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loading />}>
              <LazyLogin />
            </Suspense>
          }
        />
        <Route
          path="/list"
          element={
            <Suspense fallback={<Loading />}>
              <LazyList />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
