import { Typography } from "@material-ui/core";
import React from "react";

function Header () {
    // Needs some visual improvement/styling
    return(
      <div>
        <Typography variant="h1" color="inherit"> Feedback!</Typography>
        <Typography variant="h4" color="inherit">Don't forget it!</Typography>
      </div>
    )
}

export default Header