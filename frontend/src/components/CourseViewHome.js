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
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

import { ChevronRight } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
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
    marginTop: theme.spacing(2),
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
}));

export default function CourseViewHome(props) {
  const classes = useStyles();

  const courseList = props.courses;
  console.log("course list inside CourseViewHome: " + courseList.length);

  const history = useHistory();
  function navigateToCourse() {
    history.push("/coursespage");
  }

  return (
    <div>
      <Navbar />
      <main className={classes.content}>
        <Container className={classes.cardGrid} maxWidth="xl">
          <Typography
            variant="h4"
            component="h4"
            className={classes.Typography}
          >
            {courseList.length} in-depth courses for you to subscribe
          </Typography>
          <Grid container spacing={3}>
            {courseList.map((course) => (
              <Grid item key={course._id} xs={12} sm={6} md={4} lg={3} xl={2}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={"http://162.0.231.67/" + course.thumbnail}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h2"
                      align="left"
                    >
                      {course.title}
                    </Typography>
                    <Typography variant="body1" align="left">
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
                    <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="flex-start"
                    >
                      <Rating
                        name="read-only"
                        value={Math.floor(Math.random() * (5 - 2 + 1)) + 2}
                        readOnly
                      />
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Button
            color="inherit"
            variant="text"
            endIcon={<ChevronRight />}
            size="large"
            className={classes.Button}
          >
            View all courses
          </Button>
        </Container>
      </main>
    </div>
  );
}
