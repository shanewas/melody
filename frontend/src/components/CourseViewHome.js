import React from "react";
import {
  CssBaseline,
  Grid,
  Typography,
  Container,
  makeStyles,
  Button,
  CardActions,
  Box,
  CardContent,
  CardMedia,
  Card,
  IconButton,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import axios from "../api/Config";

import {
  ChevronRight,
  AddShoppingCart,
  ShopOutlined,
  ShoppingCart,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import theme from "../theme";

const useStyles = makeStyles((theme) => ({
  cardContent: {
    flexGrow: 1,
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },

  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
  },
  Typography: {
    marginBottom: theme.spacing(8),
    color: theme.palette.secondary.contrastText,
  },
  Button: {
    marginTop: theme.spacing(4),
    color: theme.palette.secondary.contrastText,
    textTransform: "none",

    "&:focus": {
      outline: "none",
    },
  },
  Button1: {
    textTransform: "none",

    "&:hover": {
      background: theme.palette.primary.dark,
    },

    "&:focus": {
      outline: "none",
    },
  },
}));

export default function CourseViewHome(props) {
  const classes = useStyles();

  const courseList = props.courses;
  console.log("course list inside CourseViewHome: " + courseList.length);

  const history = useHistory();
  function navigateToCourse() {
    history.push("/coursespage");
  }

  function buyCourse(id) {
    axios
      .post(
        "buy/",
        {
          user: localStorage.getItem("id"),
          course: id,
        },
        {
          headers: {
            "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
          },
        }
      )
      .then((res) => {
        console.log("bought: " + res.data);
      });
  }

  return (
    <div>
      <main className={classes.content}>
        <Container maxWidth="xl">
          {!props.from && (
            <Typography
              variant="h4"
              component="h4"
              className={classes.Typography}
            >
              {props.totalCourse} in-depth courses for you to subscribe
            </Typography>
          )}
          <Grid container spacing={3}>
            {courseList.map((course) => (
              <Grid item key={course._id} xs={12} sm={6} md={4} lg={2} xl={2}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={"http://162.0.231.67/" + course.thumbnail}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="body1"
                      component="h2"
                      align="left"
                    >
                      <Box fontWeight="fontWeightMedium">{course.title}</Box>
                    </Typography>
                    <Typography variant="body2" align="left">
                      <Box fontWeight="fontWeightMedium" fontStyle="italic">
                        {course.subtitle}
                      </Box>
                    </Typography>
                    <Typography
                      variant="body2"
                      align="left"
                    >{`Category: ${course.catagory}`}</Typography>
                    <Typography
                      variant="body2"
                      align="left"
                    >{`Level: ${course.level}`}</Typography>
                    <Typography
                      variant="body2"
                      align="left"
                    >{`Module: ${course.sublevel}`}</Typography>
                  </CardContent>
                  <Grid container direction="row" justify="flex-end">
                    {!props.from && (
                      <Button
                        variant="contained"
                        style={{
                          color: theme.palette.primary.light,
                          backgroundColor: theme.palette.secondary.contrastText,
                        }}
                        // endIcon={<ShoppingCart />}
                        className={classes.Button1}
                        size="small"
                        onClick={() => {
                          buyCourse(course._id);
                        }}
                      >
                        Add to cart
                      </Button>
                    )}
                  </Grid>
                </Card>
              </Grid>
            ))}
          </Grid>
          {!props.from && (
            <Button
              color="inherit"
              variant="text"
              endIcon={<ChevronRight />}
              size="large"
              className={classes.Button}
            >
              View all courses
            </Button>
          )}
        </Container>
      </main>
    </div>
  );
}
