import React, { useEffect } from "react";
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
  Snackbar,
  Toolbar,
  CardActionArea,
  TextField,
  ButtonGroup,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import axios from "../api/Config";

import {
  ChevronRight,
  AddShoppingCart,
  ShopOutlined,
  ShoppingCart,
  FilterList,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import theme from "../theme";
import Dialog from "./Home/LearnMoreDialog";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  cardContent: {
    flexGrow: 1,
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    "&:focus": {
      outline: "none",
    },
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
  },
  Typography1: {
    marginBottom: theme.spacing(3),
  },
  Button: {
    marginTop: theme.spacing(4),

    textTransform: "none",

    "&:focus": {
      outline: "none",
    },
  },
  Button1: {
    marginBottom: theme.spacing(5),

    "&:focus": {
      outline: "none",
    },
  },
  Snackbar: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CourseViewHome(props) {
  const classes = useStyles();

  const courseList = props.courses;

  const [open, setOpen] = React.useState(props.open);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const history = useHistory();
  function navigateToCourse(course) {
    history.push("/course", course);
  }
  function navigateToCourseList() {
    history.push("/course/all");
  }

  useEffect(() => {
    console.log("course list inside CourseViewHome: " + courseList.length);
  }, [courseList]);

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
        setOpen(true);
      });
  }

  return (
    <div>
      <CssBaseline />
      <main className={classes.content}>
        <Container maxWidth="xl">
          {props.from === "CourseList" && (
            <div className="App">
              <Navbar />
              <Toolbar style={{ marginBottom: theme.spacing(2) }} />
              <Grid container direction="row">
                <Grid item>
                  <Button
                    color="inherit"
                    variant="outlined"
                    className={classes.Button1}
                    endIcon={<FilterList />}
                  >
                    Filter by
                  </Button>
                </Grid>
                <Grid item>
                  <ButtonGroup
                    size="large"
                    style={{ color: theme.palette.primary.contrastText }}
                    fullWidth="true"
                    variant="outlined"
                    aria-label="large outlined primary button group"
                  >
                    <Button>Category</Button>
                    <Button>Level</Button>
                    <Button>Module</Button>
                    <Button>Instructor</Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </div>
          )}
          {props.from === "Home" && (
            <Typography
              variant="h4"
              component="h4"
              className={classes.Typography}
            >
              {props.totalCourse} in-depth courses for you to subscribe
            </Typography>
          )}

          {props.from === "All" && (
            <Typography
              variant="h4"
              component="h4"
              align="left"
              style={{ margin: theme.spacing(5, 0, 5, 1) }}
            >
              {props.from} Courses
            </Typography>
          )}

          {props.from === "Featured" && (
            <Typography
              variant="h4"
              component="h4"
              className={classes.Typography}
              align="left"
              style={{ margin: theme.spacing(5, 0, 5, 1) }}
            >
              {props.from} Courses
            </Typography>
          )}

          {props.from === "Top Selling" && (
            <Typography
              variant="h4"
              component="h4"
              className={classes.Typography}
              align="left"
              style={{ margin: theme.spacing(5, 0, 5, 1) }}
            >
              {props.from} Courses
            </Typography>
          )}

          {/* {props.from === "CourseList" && (
            <Typography variant="h6" className={classes.Typography1}>
              {props.totalCourse} All Courses
            </Typography>
          )} */}
          <Grid container spacing={3}>
            {courseList.map((course) => (
              <Grid item key={course._id} xs={12} sm={6} md={4} lg={2} xl={2}>
                <CardActionArea className={classes.card}>
                  <Card className={classes.card}>
                    <div
                      onClick={() => {
                        navigateToCourse(course);
                      }}
                      className={classes.card}
                    >
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
                          <Box fontWeight="fontWeightMedium">
                            {course.title}
                          </Box>
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
                    </div>
                    {props.from !== "studentpanel" && (
                      <Grid container direction="row" justify="flex-end">
                        <Dialog courseToView={course} buyfunction={buyCourse} />
                      </Grid>
                    )}
                  </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
          {props.from === "Home" && (
            <Button
              color="inherit"
              variant="text"
              endIcon={<ChevronRight />}
              size="large"
              className={classes.Button}
              onClick={navigateToCourseList}
            >
              View all courses
            </Button>
          )}
        </Container>
      </main>
      <div className={classes.Snackbar}>
        {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Course Purchased Successfully!
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}
