import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  useTheme,
} from "@mui/material";
import React from "react";

function decodeHtml(text: any) {
  let txt = document.createElement("textarea");
  txt.innerHTML = text;
  return txt.value;
}

export default function Question(props: any) {
  const theme = useTheme();

  const [value, setValue] = React.useState("");
  const [guessed, setGuessed] = React.useState(false);
  const [correct, setCorrect] = React.useState<boolean | null>(null);
  const [helperText, setHelperText] = React.useState("Choose wisely");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);

    if (event.target.value === props.question.answer) {
      setHelperText("You got it!");
      setCorrect(true);
    } else if (event.target.value !== props.question.answer) {
      setHelperText(`Correct Answer: ${props.question.answer}`);
      setCorrect(false);
    }

    setGuessed(true);
  };

  const options = [...props.question.options];
  options.sort();

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: theme.spacing(1),
      }}
    >
      <Paper
        variant="outlined"
        sx={{
          width: "80vw",
          p: theme.spacing(1),
          borderColor: correct ? "green" : !guessed ? "grey" : "red",
        }}
      >
        <FormControl
          sx={{ m: 3 }}
          error={correct === false}
          variant="standard"
          disabled={guessed}
        >
          <FormLabel>{decodeHtml(props.question.question)}</FormLabel>
          <RadioGroup value={value} onChange={handleRadioChange}>
            {options.map((option: string) => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio />}
                label={decodeHtml(option)}
              />
            ))}
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
      </Paper>
    </div>
  );
}
