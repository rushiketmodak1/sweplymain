// import { createSlice } from "@reduxjs/toolkit";
// import { STATUSES } from "../../../../../utils/status";
// // import authThunkAPI from "./middleware";

// const initialState = {
//   status: STATUSES.IDLE,
//   signup: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     clearAllStatus: (state, action) => {
//       state.deleteStatus = false;
//     },
//   },
//   extraReducers: {
//     // get Country
//     [authThunkAPI.signupAsync.pending]: (state, action) => {
//       state.loadingSignup= true;
//     },
//     [authThunkAPI.signupAsync.fulfilled]: (state, action) => {
//       state.signup = action?.payload;
//       state.loadingSignup= false;
//     },
//     [authThunkAPI.signupAsync.rejected]: (state, action) => {
//       state.loadingSignup= false;
//     },
//   },
// });

// export const { clearAllStatus } = authSlice.actions;
// export default authSlice.reducer;
