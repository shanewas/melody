import React, { useState, useEffect } from "react";
import Topnav from "./Navbar";
import instance from "../api/Config";
import { Grid } from "@material-ui/core";

export default function InstructorPage(props) {
  const instructor = props.location.state;
  console.log("instructor name inside single course view: " + instructor);
  return (
    <div>
      {console.log("photo url: " + instructor.photo)}

      <Grid container direction="column">
        <Grid item>
          <Topnav />
        </Grid>
        <Grid item>
          <img src={"http://162.0.231.67/" + instructor.photo} />
        </Grid>
      </Grid>
    </div>
  );
}
