import React, { useState, useEffect } from "react";

import {
  Typography,
  Button,
  Toolbar,
  AppBar,
  makeStyles,
  Divider,
  Grid,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  withStyles,
  Box,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { ExpandMore, ArrowForwardIos } from "@material-ui/icons";

import InstructorView from "./InstructorView";
import CoursePlayList from "./CoursePlayList";

import Footer from "./Footer";
import Topnav from "./Navbar";

import Axios from "axios";
import VideoPlayer from "./videoPlayer/VideoPlayer";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  title: {
    marginRight: theme.spacing(3),
    fontSize: 18,
  },
  loginButton: {
    justifySelf: "right",
    marginRight: theme.spacing(10),
  },
  gridItem: {
    marginTop: theme.spacing(10),
  },
  gridContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    marginTop: theme.spacing(10),
  },

  Button: {
    background: theme.palette.secondary.contrastText,
    color: "rgba(255,255,255,.87)",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: theme.palette.primary.light,
    },
  },


  Divider: {
    background: theme.palette.primary.light,
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
  DividerSmall: {
    background: theme.palette.primary.light,
    marginTop: theme.spacing(0),
  },
  FooterDivider: {
    background: theme.palette.primary.light,
    marginTop: theme.spacing(10),
  },
  Container: {
    paddingTop: theme.spacing(5),
    marginLeft: theme.spacing(30),
    marginRight: theme.spacing(30),
  },
  PlayerContainer: {
    marginRight: theme.spacing(5),
  },
  Nav: {
    marginLeft: theme.spacing(30),
    marginRight: theme.spacing(30),
  },
  IntroSection: {
    marginTop: theme.spacing(2),
  },
}));

const StyledMenu = withStyles({})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));
const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CourseVIew() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  // useState hooks for updating videoId
  const [videoid, setVideoid] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const history = useHistory();
  function navigateTo() {
    history.push("/login");
  }

  return (
    <div className={classes.root}>
      <Topnav />
      <Grid contaianer className={classes.Container}>
        <Grid
          container
          direction="row"
          lg={12}
          className={classes.IntroSection}
        >
          <Grid item lg={8} sm={12}>
            <InstructorView />
          </Grid>
          <Grid item container direction="row" lg={4} sm={12}>
            <Grid item lg={6}>
              <Grid item container direction="column" lg={12}>
                <Grid item>
                  <Typography className={classes.Typography} variant="body1">
                    Access full course by
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.Typography} variant="body1">
                    subscribing with $15
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.Typography} variant="body1">
                    (for a month)
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={6}>
              <Button
                variant="contained"
                className={classes.Button}
                size="large"
              >
                Get Started
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid container direction="row" lg={12} className={classes.gridItem}>
          <Grid item container direction="column" lg={8} sm={12}>
            <Grid item>
              <VideoPlayer url="https://www.youtube.com/embed/I41fXTW-R6I" />
            </Grid>
            <Grid item>
              <Grid item className={classes.gridContainer}>
                <Typography className={classes.Typography} align="justify">
                  Tom Morello is a two-time Grammy winner and one of Rolling
                  Stone’s "greatest guitarists of all time." In his first online
                  guitar class, the co-founder of Rage Against the Machine will
                  teach you the riffs, rhythms, and solos that launched his
                  career and sent his music to the top of the charts. Tom will
                  share his approach to making music that challenges the status
                  quo and teach you how to create your own musical style.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={4} sm={12}>
            <CoursePlayList />

            <Divider className={classes.DividerSmall} />
          </Grid>
          <Grid item lg={12} sm={12}>
            <Divider className={classes.Divider} />
          </Grid>
          <Grid item lg={12} sm={12} md={12}>
            <Box>
              <Typography>Hello</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.FooterDivider}>
        <Divider />
      </Grid>
      <Footer />
    </div>
  );
}
