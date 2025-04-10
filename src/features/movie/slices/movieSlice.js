import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMovie = createAsyncThunk("fetchMovie", async (id) => {
  const response = await fetch(
    // `https://api.themoviedb.org/3/movie/movie_id=${id}?language=en-US?api_key=1139019838901e2a7ef4e29bf9ae2ef4`
    `https://api.themoviedb.org/3/movie/${id}?api_key=1139019838901e2a7ef4e29bf9ae2ef4`
  ).then((response) => response.json());
  return response;
});

export const fetchReviews = createAsyncThunk("fetchReview", async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=1139019838901e2a7ef4e29bf9ae2ef4`
  ).then((response) => response.json());
  return response;
});

export const fetchImages = createAsyncThunk("fetchImages", async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=1139019838901e2a7ef4e29bf9ae2ef4`
  ).then((response) => response.json());
  return response;
});

export const fetchVideos = createAsyncThunk("fetchVideos", async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=1139019838901e2a7ef4e29bf9ae2ef4`
  ).then((response) => response.json());
  return response;
});

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    isLoading: false,
    data: null,
    reviews: null,
    images: null,
    videos: null,
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

    builder.addCase(fetchReviews.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchReviews.fulfilled, (state, action) => {
      state.isLoading = false;
      state.reviews = action.payload;
    });
    builder.addCase(fetchReviews.rejected, (state, action) => {
      console.log("Erorr", action.payload);
      state.isError = true;
    });

    builder.addCase(fetchImages.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchImages.fulfilled, (state, action) => {
      state.isLoading = false;
      state.images = action.payload;
    });
    builder.addCase(fetchImages.rejected, (state, action) => {
      console.log("Erorr", action.payload);
      state.isError = true;
    });

    builder.addCase(fetchVideos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.videos = action.payload;
    });
    builder.addCase(fetchVideos.rejected, (state, action) => {
      console.log("Erorr", action.payload);
      state.isError = true;
    });
  },
});

export default movieSlice.reducer;
