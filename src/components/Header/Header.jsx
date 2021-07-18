import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "../Theme/useStyle";

function Header () {
  const classes = useStyles();
    return(
      <div>
        <Typography variant="h1" color="inherit"> Feedback!</Typography>
        <Typography variant="h4" color="inherit">Don't forget it!</Typography>
      </div>
    )
}

export default Header