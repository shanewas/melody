import React from "react";
import CardThumbnail from "./CardThumbnailCourse";
import { Grid, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  title: {
    fontSize: 18,
  },
  // paper: {
  //   background: "#242322",
  // },
  arrow: {
    marginTop: theme.spacing(1),
  },
}));

export default function CoursesViewHome() {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} square>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="space-evenly"
      >
        <Grid item className={classes.root}>
          <Typography
            className={classes.title}
            variant="H1"
            component="H1"
            align="Left"
          >
            Over 350 in-depth courses for you to pick from
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="center"
          spacing={1}
        >
          <Grid item lg={2} sm={4} xs={6}>
            <CardThumbnail />
          </Grid>
          <Grid item lg={2} sm={4} xs={6}>
            <CardThumbnail />
          </Grid>
          <Grid item lg={2} sm={4} xs={6}>
            <CardThumbnail />
          </Grid>
          <Grid item lg={2} sm={4} xs={6}>
            <CardThumbnail />
          </Grid>
          <Grid item lg={2} sm={4} xs={6}>
            <CardThumbnail />
          </Grid>
          <Grid item lg={2} sm={4} xs={6}>
            <CardThumbnail />
          </Grid>
          <Grid item lg={2} sm={4} xs={6}>
            <CardThumbnail />
          </Grid>
          <Grid item lg={2} sm={4} xs={6}>
            <CardThumbnail />
          </Grid>
          <Grid item lg={2} sm={4} xs={6}>
            <CardThumbnail />
          </Grid>
          <Grid item lg={2} sm={4} xs={6}>
            <CardThumbnail />
          </Grid>
        </Grid>

        <Grid container direction="row" alignItems="center" justify="center">
          <Grid item className={classes.root}>
            <Typography className={classes.title} variant="p" component="p">
              View all courses
            </Typography>
          </Grid>
          <Grid item>
            <ChevronRightIcon className={classes.arrow} fontSize="large" />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
