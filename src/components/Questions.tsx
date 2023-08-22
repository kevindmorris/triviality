import { useAppDispatch, useAppSelector } from "../state/hooks";
import Question from "./Question";
import { CircularProgress } from "@mui/material";

export default function Questions() {
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
