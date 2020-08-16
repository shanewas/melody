import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { Box } from "@material-ui/core";

import Navbar from "./Appbar";
import Drawer from "./Drawer";
import axios from "../../api/Config";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },

  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album(props) {
  const classes = useStyles();
  const [courseList, setCourseList] = useState([]);

  //check from where the component is called
  const state = props.location.state;

  useEffect(() => {
    console.log("called from: " + state);
    switch (state) {
      case "All Courses":
        getCourses();
        break;
      case "Featured Courses":
        getFeaturedCourses();
        break;
    }
  }, [props.location.state]);

  //get all courses list from server
  function getCourses() {
    axios
      .get("course/", {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        },
      })
      .then((res) => {
        setCourseList(res.data);
      });
  }

  //get all featured courses list from server
  function getFeaturedCourses() {
    axios
      .get("course/featured/", {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        },
      })
      .then((res) => {
        setCourseList(res.data);
      });
  }

  return (
    <div className={classes.root}>
      <Navbar title={state} />
      <Drawer />

      <main className={classes.content}>
        {/* Hero unit */}

        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={3}>
            {courseList.map((course) => (
              <Grid item key={course._id} xs={12} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={"http://162.0.231.67/" + course.thumbnail}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                      {course.title}
                    </Typography>
                    <Typography variant="body1">
                      <Box fontWeight="fontWeightMedium" fontStyle="italic">
                        {course.subtitle}
                      </Box>
                    </Typography>{" "}
                    <Typography variant="body2">{`Category: ${course.catagory}`}</Typography>
                    <Typography variant="body2">{`Level: ${course.level}`}</Typography>
                    <Typography variant="body2">{`Module: ${course.sublevel}`}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                    <Button size="small">Delete</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
}
