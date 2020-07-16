import { Grid, Typography, Card, CardContent } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Card: {
    background: theme.palette.secondary.contrastText,
    padding:theme.spacing(1),
    margin: theme.spacing(5)
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <Grid container direction="row" className={classes.root} justify="center">
      <Grid item lg={4}>
        <Card className={classes.Card}>
          <CardContent>
            <Typography variant="h5">20+ CLasses</Typography>
            <Typography variant="subtitle1">From 10 Instructors</Typography>
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
};
