import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

import SendIcon from "@mui/icons-material/Send";

export default function CustomInput() {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center" , backgroundColor: "#f5f5f5" , borderRadius: "15px", border:1 , borderColor:"gray"}}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Ask Copilot"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SendIcon />
      </IconButton>
    </Paper>
  );
}
