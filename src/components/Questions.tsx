import React from "react";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import Question from "./Question";
import { Button, CircularProgress } from "@mui/material";
import { fetchMoreQuestionsAsync } from "../state/slices/appSlice";

export default function Questions() {
  const dispatch = useAppDispatch();

  const status = useAppSelector((state) => state.app.status);
  const questions = useAppSelector((state) => state.app.questions);

  if (status.questions === "pending")
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </div>
    );

  return (
    <div
      style={{
        flex: "1 1 0",
        overflowY: "auto",
      }}
    >
      <div>
        {questions.length > 1
          ? questions.map((q, i) => <Question key={i} question={q} />)
          : null}
      </div>
    </div>
  );
}
