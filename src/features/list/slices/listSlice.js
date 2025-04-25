import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchList = createAsyncThunk("fetchList", async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/list/8527742-favourite-movies?api_key=1139019838901e2a7ef4e29bf9ae2ef4"
  ).then((response) => response.json());
  return response;
});

export const changeList = createAsyncThunk(
  "postData",
  async ({ string, movieId }) => {
    console.log(string);
    const response = await fetch(
      `https://api.themoviedb.org/3/list/8527742-favourite-movies/${string}?api_key=1139019838901e2a7ef4e29bf9ae2ef4&session_id=cfaa251b5bd61f3d029cf0107a02cbc6f8893630`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ media_id: movieId }),
      }
    ).then((response) => response.json());
    return response;
  }
);

export const checkMovie = createAsyncThunk("checkMovie", async (movieId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/list/8527742-favourite-movies/item_status?api_key=1139019838901e2a7ef4e29bf9ae2ef4&session_id=cfaa251b5bd61f3d029cf0107a02cbc6f8893630`
  ).then((response) => response.json());
  const isMovieInList = response.items.some((item) => item.id === movieId);
  console.log("Check movie", isMovieInList);
  return isMovieInList;
});

// export const removeMovie = createAsyncThunk(
//   "removeMovie",
//   async ({ movieId }) => {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/list/8527742-favourite-movies/remove_item?api_key=1139019838901e2a7ef4e29bf9ae2ef4&session_id=cfaa251b5bd61f3d029cf0107a02cbc6f8893630`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ media_id: movieId }),
//       }
//     ).then((response) => response.json());

//     return response;
//   }
// );

const listSlice = createSlice({
  name: "list",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
    inList: false,
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

    builder.addCase(changeList.fulfilled, (action) => {
      console.log("iz slicea", action);
    });

    builder.addCase(changeList.rejected, (action) => {
      console.log("Error", action);
    });

    builder.addCase(checkMovie.fulfilled, (state, action) => {
      console.log("iz slices", action.payload);
      state.inList = action.payload;
    });
  },
});

export default listSlice.reducer;
