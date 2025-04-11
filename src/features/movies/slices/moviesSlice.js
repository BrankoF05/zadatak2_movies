import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk("fetchMovies", async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=1139019838901e2a7ef4e29bf9ae2ef4"
  ).then((response) => response.json());
  return response;
});

export const fetchMovieLists = createAsyncThunk(
  "fetchMovieLists",
  async (type) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=1139019838901e2a7ef4e29bf9ae2ef4`
    ).then((response) => response.json());
    return response;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      console.log("Erorr", action.payload);
      state.isError = true;
    });

    builder.addCase(fetchMovieLists.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovieLists.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchMovieLists.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default moviesSlice.reducer;
