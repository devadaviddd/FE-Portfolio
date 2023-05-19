import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userManagementInitialState, userManagementReducer, userRepository } from "../../di";
import { ErrorResponse, SignInDto } from "../../domains";
import { AppDispatch, RootState } from "../store";
import { SignInResponseSuccess } from "../../data/response";


export const signIn = createAsyncThunk<
  SignInResponseSuccess | ErrorResponse,
  SignInDto,
  { rejectValue: ErrorResponse; state : RootState; dispatch: AppDispatch}
> ('Sign In Action', async (input: SignInDto, { rejectWithValue}) => {
  try {
    const response = await userRepository.signin(input);
    return response;
  } catch (error: any) {
    const errorResponse = error as ErrorResponse;
    return rejectWithValue(errorResponse);
  }
})

export const userSlice = createSlice({
  name: "user-state-management",
  initialState: userManagementInitialState,
  reducers: {
    reset: userManagementReducer.reset,
  },
  extraReducers(builder) {
    builder.addCase(signIn.pending, (state) => ({
      ...state,
      ActionStatus: "loading",
    }));
    builder.addCase(signIn.fulfilled, (state, { payload }) => ({
      ...state,
      ActionStatus: "success",
    }));
    builder.addCase(signIn.rejected, (state, { payload }) => ({
      ...state,
      ActionStatus: "error",
      error: payload
    }))
  },
});

const { actions, reducer } = userSlice;


export const userReducer = reducer;
export const userActions = actions;

export const useUserSlice = () => {
  const actions = {
    ...userSlice.actions,
    signIn,
  }
  return { actions };
}