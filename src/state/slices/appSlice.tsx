import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Api from "../../services/trivialityApi";
import { v4 } from "uuid";

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
export const fetchMoreQuestionsAsync = createAsyncThunk(
  "app/fetchMoreQuestions",
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
        state.questions = action.payload.map((q) => ({
          id: v4(),
          question: q.question,
          answer: q.correct_answer,
          options: [q.correct_answer, ...q.incorrect_answers],
          guessed: false,
          correct: false,
          category: q.category,
          type: q.type,
          difficulty: q.difficulty,
        }));
      }
    );
    builder.addCase(fetchQuestionsAsync.rejected, (state, action) => {
      state.status.questions = "failed";
    });

    builder.addCase(fetchMoreQuestionsAsync.pending, (state, action) => {
      state.status.questions = "pending";
    });
    builder.addCase(
      fetchMoreQuestionsAsync.fulfilled,
      (state, action: PayloadAction<any[]>) => {
        state.status.questions = "idle";
        const newQuestions = action.payload.map((q) => ({
          id: v4(),
          question: q.question,
          answer: q.correct_answer,
          options: [q.correct_answer, ...q.incorrect_answers],
          guessed: false,
          correct: false,
          category: q.category,
          type: q.type,
          difficulty: q.difficulty,
        }));
        state.questions = [...state.questions, ...newQuestions];
      }
    );
    builder.addCase(fetchMoreQuestionsAsync.rejected, (state, action) => {
      state.status.questions = "failed";
    });
  },
});

export const {} = appSlice.actions;

export default appSlice.reducer;
