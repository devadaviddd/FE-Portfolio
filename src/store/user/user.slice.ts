import { createSlice } from "@reduxjs/toolkit";
import { userManagementInitialState, userManagementReducer } from "../../di";


export const userSlice = createSlice({
  name: "user-state-management",
  initialState: userManagementInitialState,
  reducers: {
    reset: userManagementReducer.reset,
  },
  extraReducers: (builder) => {},
});

const { actions, reducer } = userSlice;


export const userReducer = reducer;
export const userActions = actions;