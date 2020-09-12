import React, { useEffect, useState } from "react";

import {
  Typography,
  Paper,
  makeStyles,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Divider,
  ListItem,
  List,
  Grid,
  Button,
  useTheme,
  Toolbar,
  CssBaseline,
  Table,
  TableCell,
  TableRow,
  TableHead,
  Row,
  TableBody,
} from "@material-ui/core";
import {
  ShoppingBasketOutlined,
  Person,
  PersonOutline,
  LocalLibrary,
  LocalLibraryOutlined,
} from "@material-ui/icons";
import theme from "../../theme";
import axios from "../../api/Config";

import { useHistory } from "react-router-dom";

import Drawer from "./Drawer";
import Appbar from "./Appbar";
import ListIcon from "@material-ui/icons/List";
import SalesChart from "./SalesChart";
import InstructorFeatureList from "./InstructorFeatureList";
import CourseFeatureList from "./CourseFeatureList";

const ITEM_HEIGHT = 48;

const useStyles = makeStyles((theme) => ({
  Paper: {
    margin: theme.spacing(5, 5, 0, 5),

    padding: theme.spacing(5),
  },
  Paper1: {
    margin: theme.spacing(5),

    padding: theme.spacing(5),
  },

  Button: {
    color: theme.palette.primary.light,
    background: "#821518",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: theme.palette.primary.dark,
    },
  },
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  Icon: {
    color: theme.palette.secondary.contrastText,
    fontSize: 30,
  },
  TitleText: {
    color: theme.palette.text,
  },
  ValueText: {
    color: theme.palette.secondary.contrastText,
  },
  root1: {
    flexGrow: 1,
    maxHeight: ITEM_HEIGHT * 7.5,
    overflow: "auto",
  },
}));

export default function AdminPanel() {
  const classes = useStyles();
  const [messageList, setMessageList] = useState([]);
  const [instructorList, setInstructorList] = useState([]);
  const [courseList, setCourseList] = useState([]);
  const [analytics, setAnalytics] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    getInstructors();
    getMessages();
    getCourses();
    getAnalytics();
  }, []);

  //get analytics for the site
  function getAnalytics() {
    axios
      .get("analytics/", {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
          "Content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(
          "analytics fetched in admin: " + JSON.stringify(res.data[0])
        );
        setAnalytics(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getMessages() {
    axios
      .get("contact/getall", {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
          "Content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(
          "number of messages fetched: " + JSON.stringify(res.data.length)
        );
        setMessageList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //get all instructor list from server later it will be list of all popular instructors
  function getInstructors() {
    axios
      .get("instructor/", {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        },
      })
      .then((res) => {
        const instructorList = res.data;
        setInstructorList(instructorList);
        console.log(
          "instructor list fetched in admin: " + instructorList.length
        );
      });
  }

  //get all courses from server later it will be list all best selling courses
  function getCourses() {
    axios
      .get("course/", {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        },
      })
      .then((res, err) => {
        const courseList = res.data;
        setCourseList(courseList);
        console.log("course list fetched in admin: " + courseList.length);
      });
  }

  const history = useHistory();
  function navigateToCourseUploader() {
    history.push("/courseupload");
  }

  function navigateToInstructorUploader() {
    history.push("/instructorupload");
  }

  const courses = [
    {
      name: "Creative Acoustic Guitar",
      sales: "42",
    },
    {
      name: "Learn To Play Easy Acoustic Rock Volume 2",
      sales: "26",
    },
    {
      name: "51 Extreme Tapping Licks",
      sales: "12",
    },
    {
      name: "12 Bar Blues For Absolute Beginners",
      sales: "7",
    },
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Appbar title="Admin Dashboard" />
      <Drawer />
      <main className={classes.content}>
        <Toolbar />
        <Grid
          container
          direction="row"
        >
          <Grid
            item
            container
            direction="row"
            xs={12}
            style={{ marginLeft: theme.spacing(3) }}
          >
            <Grid item xs={2}>
              <Paper
                style={{
                  marginLeft: theme.spacing(2),
                  padding: theme.spacing(2, 1, 2, 1),
                }}
              >
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <ShoppingBasketOutlined className={classes.Icon} />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" className={classes.TitleText}>
                      Purchased Courses
                    </Typography>
                  </Grid>
                  <Grid item>
                    {" "}
                    <Typography variant="h5" className={classes.ValueText}>
                      {analytics.sold}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper
                style={{
                  marginLeft: theme.spacing(2),
                  padding: theme.spacing(2, 1, 2, 1),
                }}
              >
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <LocalLibraryOutlined className={classes.Icon} />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" className={classes.TitleText}>
                      Number of Students
                    </Typography>
                  </Grid>
                  <Grid item>
                    {" "}
                    <Typography variant="h5" className={classes.ValueText}>
                      {analytics.user}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper
                style={{
                  marginLeft: theme.spacing(2),
                  padding: theme.spacing(2, 1, 2, 1),
                }}
              >
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <ListIcon className={classes.Icon} />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" className={classes.TitleText}>
                      Total Courses
                    </Typography>
                  </Grid>
                  <Grid item>
                    {" "}
                    <Typography variant="h5" className={classes.ValueText}>
                      {analytics.course}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper
                style={{
                  marginLeft: theme.spacing(2),
                  padding: theme.spacing(2, 1, 2, 1),
                }}
              >
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <PersonOutline className={classes.Icon} />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" className={classes.TitleText}>
                      Total Instructors
                    </Typography>
                  </Grid>
                  <Grid item>
                    {" "}
                    <Typography variant="h5" className={classes.ValueText}>
                      {analytics.instructor}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.Paper}>
              <Typography
                variant="h5"
                style={{ color: theme.palette.secondary.contrastText }}
              >
                Best Sellers
              </Typography>
              <div className={classes.root1}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Course Name</TableCell>
                      <TableCell align="right">Sales</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {courseList.map((course) => (
                      <TableRow key={course.title}>
                        <TableCell component="th">{course.title}</TableCell>
                        <TableCell align="right">{course.sold}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.Paper}>
              <Typography
                variant="h5"
                style={{ color: theme.palette.secondary.contrastText }}
              >
                Popular Instructors
              </Typography>
              <div className={classes.root1}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Instructor Name</TableCell>
                      <TableCell align="center">Earnings (BDT)</TableCell>
                      <TableCell align="right">Sales</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {instructorList.map((instructor) => (
                      <TableRow key={instructor.name}>
                        <TableCell component="th">{instructor.name}</TableCell>
                        <TableCell component="th" align="center">
                          {instructor.earnings}
                        </TableCell>
                        <TableCell align="right">{instructor.sold}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.Paper}>
              <Typography
                variant="h5"
                style={{
                  color: theme.palette.secondary.contrastText,
                  marginBottom: theme.spacing(2),
                }}
              >
                Feature Instructors
              </Typography>

              <InstructorFeatureList />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.Paper}>
              <Typography
                variant="h5"
                style={{
                  color: theme.palette.secondary.contrastText,
                  marginBottom: theme.spacing(2),
                }}
              >
                Feature Courses
              </Typography>

              <CourseFeatureList />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.Paper}>
              <Typography
                variant="h5"
                style={{ color: theme.palette.secondary.contrastText }}
              >
                Messages
              </Typography>
              <div className={classes.root1}>
                {messageList.map((message) => (
                  <List>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar
                          alt={message.name}
                          src="/static/images/avatar/1.jpg"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={message.name}
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              className={classes.inline}
                              color="textPrimary"
                            >
                              {message.email}
                            </Typography>
                            <br />
                            {` - ${message.message}`}
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </List>
                ))}
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.Paper}>
              <Typography
                variant="h5"
                style={{ color: theme.palette.secondary.contrastText }}
              >
                Sales Report
              </Typography>
              <div>
                <SalesChart />
              </div>
            </Paper>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
