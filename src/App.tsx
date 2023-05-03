import React from "react";
import Api from "./services/trivialityApi";
import { useAppDispatch, useAppSelector } from "./state/hooks";
import { fetchQuestionsAsync } from "./state/slices/appSlice";
import CookieJar from "./components/CookieJar";
import Question from "./components/Question";

function App() {
  const dispatch = useAppDispatch();
  const questions = useAppSelector((state) => state.app.questions);

  React.useEffect(() => {
    dispatch(fetchQuestionsAsync(10));
  }, []);
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <CookieJar />
      <div style={{ flex: 1 }}>
        {questions.length > 1
          ? questions.map((q, i) => <Question key={i} question={q} />)
          : null}
      </div>
    </div>
  );
}

export default App;
