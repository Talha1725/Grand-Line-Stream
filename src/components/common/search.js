import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function SearchField() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          width: "100%",
          "& .MuiInputLabel-root": {
            color: "#ffffff", // Replace with your custom label color
          },
          "& .MuiInputBase-root": {
            "& input": {
              color: "#ffffff", // Replace with your custom text color
            },
            backgroundColor: "#222124", // Replace with your custom background color
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#7A65C9", // Replace with your custom outline color
            },
            "&:hover fieldset": {
              borderColor: "#7A65C9", // Replace with your custom hover outline color
            },
          },
        },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="filled-search"
          label="Enter Anime Name..."
          type="search"
          variant="filled"
        />
      </div>
    </Box>
  );
}
