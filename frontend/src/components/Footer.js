import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Link } from "@material-ui/core";

import {
  Twitter,
  Instagram,
  Facebook,
  YouTube,
  LinkedIn,
} from "@material-ui/icons";

import "../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Typography: {
    color: theme.palette.secondary.contrastText,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item lg={4} md={4} xs={12}>
        <Grid container direction="column" spacing={3} alignContent="center">
          <Grid item>
            <Typography
              variant="subtitle2"
              align="left"
              className={classes.Typography}
            >
              Explore
            </Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Link color="inherit" size="small">
                <Typography variant="body2" className={classes.Typography}>
                  Classes
                </Typography>
              </Link>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Link color="inherit" size="small">
                <Typography variant="body2" className={classes.Typography}>
                  Metholdmelody Live
                </Typography>
              </Link>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Link color="inherit" size="small">
                <Typography variant="body2" className={classes.Typography}>
                  Articles
                </Typography>
              </Link>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Link color="inherit" size="small">
                <Typography variant="body2" className={classes.Typography}>
                  Sitemap
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item lg={4} md={4} xs={12}>
        <Grid container direction="column" spacing={3} alignContent="center">
          <Grid item>
            <Typography
              variant="subtitle2"
              align="left"
              className={classes.Typography}
            >
              About
            </Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Link color="inherit" size="small">
                <Typography variant="body2" className={classes.Typography}>
                  Diversity, Equity and Inclusion
                </Typography>
              </Link>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Link color="inherit" size="small">
                <Typography variant="body2" className={classes.Typography}>
                  Privacy
                </Typography>
              </Link>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Link color="inherit" size="small">
                <Typography variant="body2" className={classes.Typography}>
                  Terms
                </Typography>
              </Link>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Link color="inherit" size="small">
                <Typography variant="body2" className={classes.Typography}>
                  Support
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={4} md={4} xs={12}>
        <Grid container direction="column" spacing={3} alignContent="center">
          <Grid item>
            <Typography
              variant="subtitle2"
              align="center"
              className={classes.Typography}
            >
              Social
            </Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Twitter fontSize="small" />
              <Link color="inherit" size="small">
                <Typography variant="body2" className={classes.Typography}>
                  Twitter
                </Typography>
              </Link>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Instagram fontSize="small" />
              <Link color="inherit" size="small">
                <Typography variant="body2" className={classes.Typography}>
                  Instagram
                </Typography>
              </Link>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Facebook fontSize="small" />
              <Link color="inherit" size="small">
                <Typography variant="body2" className={classes.Typography}>
                  Facebook
                </Typography>
              </Link>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <LinkedIn fontSize="small" />
              <Link color="inherit" size="small">
                <Typography variant="body2" className={classes.Typography}>
                  LinkedIn
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
