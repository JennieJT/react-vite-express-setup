import { createSlice } from '@reduxjs/toolkit';

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    user: {username: "Mike"},
    isLoggedIn: true
  },
  reducers: {
    signUp: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    signIn: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    editUser: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state, action) => {
      state.user = {};
      state.isLoggedIn = false;
    }
  }
});

export const selectCurrentUser = (state) => state.session.user;
export const selectCurrentUserName = (state) => state.session.userName;
export const selectIsLoggedIn = (state) => state.session.isLoggedIn;
export const { signUp, signIn, logOut, editUser } = sessionSlice.actions;
export default sessionSlice.reducer;
