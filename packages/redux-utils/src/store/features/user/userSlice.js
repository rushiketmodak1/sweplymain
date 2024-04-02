import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../../../../../utils/status";
import userThunkAPI from "./middleware";

const initialState = {
  status: STATUSES.IDLE,
  countryList: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearAllStatus: (state, action) => {
      state.deleteStatus = false;
    },
  },
  extraReducers: {
    // get Country
    [userThunkAPI.getCountryAsync.pending]: (state, action) => {
      state.loadingCountry = true;
    },
    [userThunkAPI.getCountryAsync.fulfilled]: (state, action) => {
      state.countryList = action?.payload;
      state.loadingCountry = false;
    },
    [userThunkAPI.getCountryAsync.rejected]: (state, action) => {
      state.loadingCountry = false;
    },
  },
});

export const { clearAllStatus } = userSlice.actions;
export default userSlice.reducer;
