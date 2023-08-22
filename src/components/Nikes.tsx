import { GitHub, LinkedIn } from "@mui/icons-material";
import { Link, Paper, Stack, Typography, useTheme } from "@mui/material";

export default function Nikes() {
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      square
      sx={{
        position: "sticky",
        bottom: 0,
        p: theme.spacing(0.5),
        borderTop: `1px solid ${theme.palette.divider}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="caption">
          A site developed by Kevin Morris
        </Typography>
        <Typography variant="caption">|</Typography>
        <Link
          href="https://www.linkedin.com/in/kevin-m-530572120/"
          target="_blank"
          display="flex"
          alignItems="center"
        >
          <LinkedIn sx={{ color: "#0072b1" }} />
        </Link>
        <Link
          href="https://github.com/kevindmorris"
          target="_blank"
          display="flex"
          alignItems="center"
        >
          <GitHub sx={{ color: "black" }} />
        </Link>
      </Stack>
    </Paper>
  );
}
