import React from "react";
import { useAppDispatch, useAppSelector } from "./state/hooks";
import { fetchQuestionsAsync } from "./state/slices/appSlice";
import CookieJar from "./components/CookieJar";
import Questions from "./components/Questions";
import { useTheme } from "@mui/material";

function App() {
  const theme = useTheme();

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchQuestionsAsync(5));
  }, []);

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <CookieJar />
      <Questions />
    </div>
  );
}

export default App;
