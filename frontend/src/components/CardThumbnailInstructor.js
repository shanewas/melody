import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import theme from "../theme";
import { Grid, Typography, colors } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background: "#191c21",
  },
  media: {
    height: 120,
  },
  Typography: {
    fontSize: 18,
    padding: theme.spacing(1, 0, 0, 2),
  },
});

export default function CardThumbnailInstructor() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Grid container direction="row" alignItems="center" justify="center">
        <Grid item lg={4} md={4} sm={4} xs={12}>
          <CardMedia
            className={classes.media}
            image="https://opend-licklibrary-com.akamaized.net/images/tutors/thumbnails/hero-tutor_Jamie_Humphries.jpg"
            title="Contemplative Reptile"
          />
        </Grid>
        <Grid container direction="column" lg={8} md={6} sm={8} xs={12}>
          <Grid item>
            <Typography align="left" className={classes.Typography}>
              John Doe
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="left" className={classes.Typography}>
              Teaches the Art and Soul of Guitar
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
