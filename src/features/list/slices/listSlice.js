import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchList = createAsyncThunk("fetchList", async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/list/8527742-favourite-movies?api_key=1139019838901e2a7ef4e29bf9ae2ef4"
  ).then((response) => response.json());
  return response;
});

const listSlice = createSlice({
  name: "list",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchList.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchList.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchList.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default listSlice.reducer;
