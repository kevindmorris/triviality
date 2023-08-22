import React from "react";
import { useAppDispatch } from "./state/hooks";
import { fetchQuestionsAsync } from "./state/slices/appSlice";
import CookieJar from "./components/CookieJar";
import Questions from "./components/Questions";
import Nikes from "./components/Nikes";

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchQuestionsAsync(5));
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CookieJar />
      <Questions />
      <Nikes />
    </div>
  );
}

export default App;
