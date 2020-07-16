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
    padding: theme.spacing(10),
  },
  typography: {
    marginLeft: theme.spacing(1),
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
            <Typography variant="subtitle2" align="left">
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
                <Typography variant="body2">Classes</Typography>
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
                <Typography variant="body2">Metholdmelody Live</Typography>
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
                <Typography variant="body2">Articles</Typography>
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
                <Typography variant="body2">Sitemap</Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item lg={4} md={4} xs={12}>
        <Grid container direction="column" spacing={3} alignContent="center">
          <Grid item>
            <Typography variant="subtitle2" align="left">
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
                <Typography variant="body2">
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
                <Typography variant="body2">Privacy</Typography>
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
                <Typography variant="body2">Terms</Typography>
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
                <Typography variant="body2">Support</Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={4} md={4} xs={12}>
        <Grid container direction="column" spacing={3} alignContent="center">
          <Grid item>
            <Typography variant="subtitle2" align="left">
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
                <Typography variant="body2" className={classes.typography}>
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
                <Typography variant="body2" className={classes.typography}>
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
                <Typography variant="body2" className={classes.typography}>
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
                <Typography variant="body2" className={classes.typography}>
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
