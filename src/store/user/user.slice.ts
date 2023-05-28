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
    reset: () => userManagementInitialState,
  },
  extraReducers(builder) {
    builder.addCase(signIn.pending, (state) => ({
      ...state,
      actionStatus: "loading",
    }));
    builder.addCase(signIn.fulfilled, (state, { payload }) => ({
      ...state,
      actionStatus: "success",
      error: undefined,
    }));
    builder.addCase(signIn.rejected, (state, { payload }) => ({
      ...state,
      actionStatus: "error",
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