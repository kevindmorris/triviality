import { Button, Paper, useTheme } from "@mui/material";
import React from "react";
import { fetchQuestionsAsync } from "../state/slices/appSlice";
import { useAppDispatch } from "../state/hooks";

export default function CookieJar() {
  const dispatch = useAppDispatch();

  const theme = useTheme();
  return (
    <Paper
      elevation={0}
      sx={{
        position: "sticky",
        p: theme.spacing(1),
        borderBottom: `1px solid ${theme.palette.divider}`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img src={require("./triviality.png")} alt="" style={{ height: 40 }} />
      <Button
        variant="outlined"
        onClick={() => dispatch(fetchQuestionsAsync(5))}
      >
        New Questions
      </Button>
    </Paper>
  );
}
