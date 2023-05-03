import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import Api from "../../services/trivialityApi";

interface AppState {
  status: { questions: "idle" | "pending" | "succeeded" | "failed" };
  questions: any[];
}

const initialState: AppState = {
  status: { questions: "idle" },
  questions: [],
};

const api = new Api();

export const fetchQuestionsAsync = createAsyncThunk(
  "app/fetchQuestions",
  async (amount: number) => {
    const response = await api.getQuestions(amount);
    return response.data.results;
  }
);

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuestionsAsync.pending, (state, action) => {
      state.status.questions = "pending";
    });
    builder.addCase(
      fetchQuestionsAsync.fulfilled,
      (state, action: PayloadAction<any[]>) => {
        state.status.questions = "idle";
        state.questions = action.payload;
      }
    );
    builder.addCase(fetchQuestionsAsync.rejected, (state, action) => {
      state.status.questions = "failed";
    });
  },
});

export const {} = appSlice.actions;

export default appSlice.reducer;
