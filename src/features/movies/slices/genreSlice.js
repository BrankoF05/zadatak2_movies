import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGenres = createAsyncThunk("fetchGenres", async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=1139019838901e2a7ef4e29bf9ae2ef4"
  ).then((response) => response.json());
  return response;
});
const genresSlice = createSlice({
  name: "genres",
  initialState: {
    isLoading: false,
    data: null,
    selected_genre: 0,
    isError: false,
  },
  reducers: {
    setSelectedGenre(state, action) {
      state.selected_genre = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGenres.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGenres.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchGenres.rejected, (state, action) => {
      console.log("Erorr", action.payload);
      state.isError = true;
    });
  },
});

export default genresSlice.reducer;
export const { setSelectedGenre } = genresSlice.actions;
