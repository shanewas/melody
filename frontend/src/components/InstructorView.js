import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Typography, Grid } from "@material-ui/core";
import { PlayCircleFilledWhite } from "@material-ui/icons";
import axios from "../api/Config";

import theme from "../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  Typography: {
    color: theme.palette.secondary.contrastText,
  },
}));

export default function InstructorView(props) {
  const classes = useStyles();

  const [instructor, setInstructor] = useState("");

  const instructorId = props.instructorId;

  useEffect(() => {
    getInstructor();
  });

  function getInstructor() {
    let endpoint = "instructor/" + instructorId;
    console.log("Endpoint to send in request = " + endpoint);
    axios
      .get(endpoint, {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        },
      })
      .then((res) => {
        const instructorGot = res.data;
        // setInstructorList(instructorList);
        console.log(
          "instructor fetched in instructorView: " +
            JSON.stringify(instructorGot)
        );
        if (instructor === "") {
          setInstructor(instructorGot);
        }
      });
  }

  return (
    <Grid container direction="row" className={classes.root}>
      <Grid item>
        <Avatar
          alt="Tom Morello"
          src={"http://162.0.231.67/" + instructor.photo}
          className={classes.large}
        />
      </Grid>

      <Grid item className={classes.gridItem}>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h6" className={classes.Typography}>
              {instructor.name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle"
              style={{ color: theme.palette.text.secondary }}
            >
              Teaches Electric Guitar
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle"
              className={classes.Typography}
              style={{ color: theme.palette.text.secondary }}
            >
              26 video lessons (5h 36m)
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
