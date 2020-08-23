import React, { useState, useEffect } from "react";

import {
  Typography,
  Button,
  makeStyles,
  Divider,
  Grid,
  Menu,
  MenuItem,
  withStyles,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {
  ExpandMore,
  ArrowForwardIos,
  Check,
  ArrowRight,
} from "@material-ui/icons";

import InstructorView from "./InstructorView";
import CoursePlayList from "./CoursePlayList";

import Footer from "./Footer";
import Topnav from "./Navbar";

import Axios from "axios";
import VideoPlayer from "./videoPlayer/VideoPlayer";

import theme from "../theme";
import axios from "../api/Config";

const useStyles = makeStyles((theme) => ({
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
      backgroundColor: theme.palette.primary.dark,
    },
  },

  Divider: {
    background: theme.palette.secondary.dark,
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
  DividerSmall: {
    background: theme.palette.secondary.dark,
    marginTop: theme.spacing(2),
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

  Nav: {
    marginLeft: theme.spacing(30),
    marginRight: theme.spacing(30),
  },
  Typography: {
    color: theme.palette.text.secondary,
  },
  Box: {
    color: theme.palette.primary.light,
  },
  ListItemText: {
    color: theme.palette.text.secondary,
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

export default function CourseVIew(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  // useState hooks for updating videoId
  const [video, setVideo] = useState("");

  const [course, setCourse] = useState("");

  const [instructor, setInstructor] = useState("");

  const state = props.location.state;

  console.log("course name inside single course view: " + state);

  useEffect(() => {
    getCourseData();
    getVideoData();
  }, []);

  function getCourseData() {
    console.log("state data inside: " + state);
    setCourse(state);
  }

  function getVideoData() {
    axios
      .get("video/5f147d66d4c1340a1b1ff499/", {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        },
      })
      .then((res) => {
        const data = res.data;
        // console.log(data.file);
        // setState({ video: url });
        setVideo(data.file);
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
    <div style={{ background: theme.palette.background.default }}>
      <div className="App">
        <Topnav />
      </div>
      <Grid contaianer className={classes.Container}>
        <Grid container direction="row" lg={12}>
          <Grid item lg={12} sm={12}>
            <Typography
              variant="h4"
              style={{
                color: theme.palette.secondary.contrastText,
                marginTop: theme.spacing(3),
                marginBottom: theme.spacing(5),
              }}
            >
              {course.title}
            </Typography>
          </Grid>
          <Grid item lg={8} sm={12}>
            <InstructorView instructorId={course.instructor} />
          </Grid>
          <Grid item container direction="row" lg={4} sm={12}>
            <Grid item lg={6}>
              <Grid item container direction="column" lg={12}>
                <Grid item>
                  <Typography variant="body1" className={classes.Typography}>
                    Access full course by
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" className={classes.Typography}>
                    subscribing with {course.price}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" className={classes.Typography}>
                    (for {course.validity} days)
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
              {console.log("player video url:" + video)}
              <VideoPlayer url={"http://162.0.231.67/" + video} />
            </Grid>

            <Grid item className={classes.gridContainer}>
              <Paper
                square="true"
                elevation={0}
                style={{
                  background: theme.palette.primary.light,
                  padding: theme.spacing(3),
                  margin: theme.spacing(0, 2, 0, 0),
                }}
              >
                <Typography color="textSecondary" variant="h6">
                  What you'll learn?
                </Typography>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        style={{
                          color: theme.palette.text.secondary,
                          padding: theme.spacing(1, 0, 0, 5),
                          borderBottom: "none",
                        }}
                      >
                        <Grid container direction="row">
                          <Grid item lg={1}>
                            <Check
                              style={{ color: theme.palette.text.secondary }}
                              fontSize="small"
                            />
                          </Grid>
                          <Grid item lg={11}>
                            <Typography> Basic 12 bar blues form</Typography>
                          </Grid>
                        </Grid>
                      </TableCell>
                      <TableCell
                        style={{
                          color: theme.palette.text.secondary,
                          padding: theme.spacing(1, 0, 0, 5),
                          borderBottom: "none",
                        }}
                      >
                        <Grid container direction="row">
                          <Grid item lg={1}>
                            <Check
                              style={{ color: theme.palette.text.secondary }}
                              fontSize="small"
                            />
                          </Grid>
                          <Grid item lg={11}>
                            <Typography> Chord patterns</Typography>
                          </Grid>
                        </Grid>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        style={{
                          color: theme.palette.text.secondary,
                          padding: theme.spacing(1, 0, 0, 5),
                          borderBottom: "none",
                        }}
                      >
                        <Grid container direction="row">
                          <Grid item lg={1}>
                            <Check
                              style={{ color: theme.palette.text.secondary }}
                              fontSize="small"
                            />
                          </Grid>
                          <Grid item lg={11}>
                            <Typography>12 bar blues guitar riffs</Typography>
                          </Grid>
                        </Grid>
                      </TableCell>
                      <TableCell
                        style={{
                          color: theme.palette.text.secondary,
                          padding: theme.spacing(1, 0, 0, 5),
                          borderBottom: "none",
                        }}
                      >
                        <Grid container direction="row">
                          <Grid item lg={1}>
                            <Check
                              style={{ color: theme.palette.text.secondary }}
                              fontSize="small"
                            />
                          </Grid>
                          <Grid item lg={11}>
                            <Typography> Moveable chord patterns</Typography>
                          </Grid>
                        </Grid>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        style={{
                          color: theme.palette.text.secondary,
                          padding: theme.spacing(1, 0, 0, 5),
                          borderBottom: "none",
                        }}
                      >
                        <Grid container direction="row">
                          <Grid item lg={1}>
                            <Check
                              style={{ color: theme.palette.text.secondary }}
                              fontSize="small"
                            />
                          </Grid>
                          <Grid item lg={11}>
                            <Typography>Blues Fills</Typography>
                          </Grid>
                        </Grid>
                      </TableCell>
                      <TableCell
                        style={{
                          color: theme.palette.text.secondary,
                          padding: theme.spacing(1, 0, 0, 5),
                          borderBottom: "none",
                        }}
                      >
                        <Grid container direction="row">
                          <Grid item lg={1}>
                            <Check
                              style={{ color: theme.palette.text.secondary }}
                              fontSize="small"
                            />
                          </Grid>
                          <Grid item lg={11}>
                            <Typography>Double Stops</Typography>
                          </Grid>
                        </Grid>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        style={{
                          color: theme.palette.text.secondary,
                          padding: theme.spacing(1, 0, 0, 5),
                          borderBottom: "none",
                        }}
                      >
                        <Grid container direction="row">
                          <Grid item lg={1}>
                            <Check
                              style={{ color: theme.palette.text.secondary }}
                              fontSize="small"
                            />
                          </Grid>
                          <Grid item lg={11}>
                            <Typography>Blues guitar soloing ideas</Typography>
                          </Grid>
                        </Grid>
                      </TableCell>
                      <TableCell
                        style={{
                          color: theme.palette.text.secondary,
                          padding: theme.spacing(1, 0, 0, 5),
                          borderBottom: "none",
                        }}
                      >
                        <Grid container direction="row">
                          <Grid item lg={1}>
                            <Check
                              style={{ color: theme.palette.text.secondary }}
                              fontSize="small"
                            />
                          </Grid>
                          <Grid item lg={11}>
                            <Typography>Blues guitar scales </Typography>
                          </Grid>
                        </Grid>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
            <Grid item>
              <Typography
                align="justify"
                className={classes.Typography}
                variant="h6"
                style={{ marginTop: theme.spacing(8) }}
              >
                Requirements
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRight />
                  </ListItemIcon>
                  <ListItemText
                    primary="No special skills required"
                    className={classes.ListItemText}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRight />
                  </ListItemIcon>
                  <ListItemText
                    primary="You will need a guitar"
                    className={classes.ListItemText}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRight />
                  </ListItemIcon>
                  <ListItemText
                    primary="Practice cannot be avoided"
                    className={classes.ListItemText}
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <Grid item lg={4} sm={12} container direction="column">
            <Grid item>
              <CoursePlayList />
            </Grid>
            <Grid item>
              <Divider className={classes.DividerSmall} />
            </Grid>
            <Grid item className={classes.gridContainer}>
              {/* <Box border={5}  className={classes.Box}> */}
              <Typography
                align="justify"
                className={classes.Typography}
                variant="h6"
              >
                Description
              </Typography>
              <Typography align="justify" className={classes.Typography}>
                {course.desc}
              </Typography>
              {/* </Box> */}
            </Grid>
          </Grid>
          <Grid item lg={12} sm={12}>
            <Divider className={classes.Divider} />
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
