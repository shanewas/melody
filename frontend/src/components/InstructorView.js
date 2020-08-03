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

  const [instructor, setInstructor] = useState(null);

  const instructorId = props.instructorId;
  console.log("instructor id in InstructorView: " + instructorId);

  const endpoint = "instructor/"+instructorId+"/";
  console.log("instructor id endpoint in InstructorView: " + endpoint);

  useEffect(() => {
		
		getInstructor();
	}, []);

  function getInstructor(){
    axios
			.get(endpoint, {
				headers: {
					"auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
				},
			})
			.then((res) => {
				const instructor = res.data;
				// setInstructorList(instructorList);
				console.log("instructor fetched in instructorView: " + instructor);
			});
  }

  return (
    <Grid container direction="row" className={classes.root}>
      <Grid item>
        <Avatar
          alt="Tom Morello"
          src="https://images-na.ssl-images-amazon.com/images/I/B1GPYA32OiS._CR0,0,3840,2880_._SL1000_.png"
          className={classes.large}
        />
      </Grid>
      <Grid item className={classes.gridItem}>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h6" className={classes.Typography}>
              Tom Morello
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
