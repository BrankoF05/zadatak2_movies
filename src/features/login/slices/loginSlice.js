import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    error: null,
    isLogged: false,
  },
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;

      if (username === "admin" && password === "admin123") {
        state.isLogged = true;
        state.user = { username };
        localStorage.setItem("user", JSON.stringify({ username }));
        state.error = null;
      } else {
        state.error = "Invalid username or password";
      }
    },
    logout: (state) => {
      state.isLogged = false;
      state.user = null;
      localStorage.removeItem("user");
      state.error = null;
    },
    loadUser: (state) => {
      const user = localStorage.getItem("user");
      state.error = null;
      if (user) {
        state.isLogged = true;
        state.user = JSON.parse(user);
      }
    },
  },
});

export const { login, logout, loadUser } = userSlice.actions;
export default userSlice.reducer;
