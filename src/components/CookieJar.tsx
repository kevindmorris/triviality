import { Button, Paper, useTheme } from "@mui/material";
import { fetchQuestionsAsync } from "../state/slices/appSlice";
import { useAppDispatch } from "../state/hooks";

export default function CookieJar() {
  const dispatch = useAppDispatch();

  const theme = useTheme();
  return (
    <Paper
      elevation={0}
      square
      sx={{
        position: "sticky",
        top: 0,
        p: theme.spacing(1),
        borderBottom: `1px solid ${theme.palette.divider}`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: theme.zIndex.appBar,
      }}
    >
      <img
        src={require("../assets/triviality.png")}
        alt=""
        style={{ height: 40 }}
      />
      <Button
        variant="outlined"
        onClick={() => dispatch(fetchQuestionsAsync(5))}
      >
        New Questions
      </Button>
    </Paper>
  );
}
