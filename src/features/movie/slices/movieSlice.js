import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMovie = createAsyncThunk("fetchMovie", async (id) => {
  const response = await fetch(
    // `https://api.themoviedb.org/3/movie/movie_id=${id}?language=en-US?api_key=1139019838901e2a7ef4e29bf9ae2ef4`
    `https://api.themoviedb.org/3/movie/${id}?api_key=1139019838901e2a7ef4e29bf9ae2ef4&&append_to_response=reviews,videos,images`
  ).then((response) => response.json());
  return response;
});

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovie.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchMovie.rejected, (state, action) => {
      console.log("Erorr", action.payload);
      state.isError = true;
    });
  },
});

export default movieSlice.reducer;
