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
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { ExpandMore, ArrowForwardIos } from "@material-ui/icons";
import YoutubePlayer from "react-youtube";

import InstructorView from "./InstructorView";
import CoursePlayList from "./CoursePlayList";
import Youtube from "../api/Youtube";
import Footer from "./Footer";

import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: theme.spacing(10),
  },
  gridContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    marginTop: theme.spacing(5),
  },
  youtubePlayer: {
    height: "500px",
    width: "100%",

    marginRight: theme.spacing(2),
  },
  Button: {
    background: "rgba(225, 7, 18, .87)",
    color: "rgba(255,255,255,.87)",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: theme.palette.primary.light,
    },
  },
  Typography: {
    color: theme.palette.text.primary,
  },
  courseGetStart: {
    backgroundColor: theme.palette.primary.light,
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

  useEffect(() => {
    Axios.get(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBnuki5-aJBYxwv17HKL31LcYDLW6T3p9k&channelId=UCnRI0ay61tY-fKYzzB3fCnw&maxResults=5"
    ).then(({ data }) => {
      console.log(data.items[0].id.videoId);
      const vid = data.items[0].id.videoId;
      setVideoid(vid);
    });
  });

  // React Player Option Customization
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 0,
      rel: 0,
    },
  };

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.Nav}>
        <Toolbar>
          <Typography variant="body1" className={classes.title}>
            MethodMelody
          </Typography>
          <div>
            <Button
              color="inherit"
              endIcon={<ExpandMore />}
              aria-controls="customized-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Learn
            </Button>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <StyledMenuItem>
                <ListItemIcon>
                  <ArrowForwardIos fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Sent mail" />
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemIcon>
                  <ArrowForwardIos fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemIcon>
                  <ArrowForwardIos fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </StyledMenuItem>
            </StyledMenu>
          </div>
          <Button
            color="inherit"
            className={classes.loginButton}
            aria-controls="customized-menu"
            aria-haspopup="true"
            onClick={navigateTo}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Grid contaianer className={classes.Container}>
        <Grid container direction="row" lg={12}>
          <Grid item lg={8} sm={12} className={classes.gridItem}>
            <InstructorView />
          </Grid>
          <Grid
            item
            container
            direction="row"
            lg={4}
            sm={12}
            className={classes.courseGetStart}           
          >
            <Grid
              item
              container
              direction="column"
              lg={6}
              alignItems="center"
              justify="center"             
            >
              <Grid item >
                <Typography className={classes.Typography} variant="body1">
                  Access the full course by
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.Typography} variant="body1">
                  subscribing with $15
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.Typography} variant="body1">
                  (billed annually)
                </Typography>
              </Grid>
            </Grid>
            <Grid item container lg={6} alignItems="center" justify="center">
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

        <Grid container direction="row" lg={12}>
          <Grid item container direction="column" lg={8} sm={12}>
            <Grid item className={classes.PlayerContainer}>
              <YoutubePlayer
                className={classes.youtubePlayer}
                // videoId={videoid}
                videoId="M4tz8nJImZc"
                opts={opts}
              />
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
        </Grid>
      </Grid>
      <Grid item className={classes.FooterDivider}>
        <Divider />
      </Grid>
      <Grid item></Grid>
      <Footer />
    </div>
  );
}
