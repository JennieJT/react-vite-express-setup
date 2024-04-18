import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
  errorMessage: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.errorMessage = '';
    },
    loginFailure(state, action) {
      state.isLoggedIn = false;
      state.user = null;
      state.errorMessage = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: userSlice.reducer,
});

export const { loginSuccess, loginFailure } = userSlice.actions;