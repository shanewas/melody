import { Grid, Typography, Card, CardContent } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Card: {
    background: theme.palette.primary.dark,
    padding: theme.spacing(1),
    margin: theme.spacing(5),
  },
}));

export default function Info(props) {
  const classes = useStyles();

  const numberOfCourse = props.numberOfCourse;
  const numberOfInstructors = props.numberOfInstructors;
  return (
    <Grid container direction="row" className={classes.root} justify="center">
      <Grid item lg={4}>
        <Card className={classes.Card}>
          <CardContent>
            <Typography variant="h5">{numberOfCourse} Classes</Typography>
            <Typography variant="subtitle1">
              From {numberOfInstructors} Instructors
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item item lg={4}>
        <Card className={classes.Card}>
          <CardContent>
            <Typography variant="h5">10 Lessons</Typography>
            <Typography variant="subtitle1">Per Class</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item item lg={4}>
        <Card className={classes.Card}>
          <CardContent>
            <Typography variant="h5">10 Minutes</Typography>
            <Typography variant="subtitle1">Per Lesson</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
