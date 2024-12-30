"use client";

import { useState } from "react";
import Switch from "@mui/material/Switch";

export default function ControlledSwitches() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div class="flex items-center"> 
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
      <p>Pro</p>
    </div>
  );
}
