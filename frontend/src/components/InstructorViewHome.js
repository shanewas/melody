import React from "react";
import {
  Card,
  Grid,
  Typography,
  Container,
  makeStyles,
  Button,
  CardContent,
  CardMedia,
  Toolbar,
} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import CardThumbnailInstructor from "./CardThumbnailInstructor";
import { ChevronRight, FilterList } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import InstructorList from "./Instructor/InstructorList";
import theme from "../theme";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
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
  },
  Button: {
    marginTop: theme.spacing(4),
    color: theme.palette.secondary.contrastText,
    textTransform: "none",
    "&:hover": {
      color: theme.palette.primary.dark,
    },
    "&:focus": {
      outline: "none",
    },
  },
  Button1: {
    color: theme.palette.secondary.contrastText,
    borderColor: theme.palette.secondary.contrastText,
    marginBottom: theme.spacing(5),
    "&:hover": {
      borderColor: theme.palette.primary.dark,
      color: theme.palette.primary.dark,
    },

    "&:focus": {
      outline: "none",
    },
  },
  Typography: {
    marginBottom: theme.spacing(8),
    color: theme.palette.secondary.contrastText,
  },
}));

export default function InstructorViewHome(props) {
  const classes = useStyles();

  const instructorList = props.instructors;
  console.log(
    "instructor list inside InstructorViewHome: " + instructorList.length
  );

  const history = useHistory();
  function navigateToInstructorList() {
    console.log("cliked on button");
    history.push("/instructor/all");
  }

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <Container maxWidth="xl">
          {props.from === "instructorList" && (
            <div className="App">
              <Navbar />
              <Toolbar style={{ marginBottom: theme.spacing(2) }} />
              <Grid container direction="row">
                <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.Button1}
                    endIcon={<FilterList />}
                  >
                    Filter by
                  </Button>
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
              Learn from the Best of the Best
            </Typography>
          )}
          <Grid container spacing={3}>
            {instructorList.map((instructor) => (
              <Grid
                item
                key={instructor._id}
                xs={12}
                sm={6}
                md={4}
                lg={2}
                xl={2}
              >
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={"http://162.0.231.67/" + instructor.photo}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h2"
                      align="left"
                    >
                      {instructor.name}
                    </Typography>
                  </CardContent>
                </Card>
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
              onClick={navigateToInstructorList}
            >
              View all instructors
            </Button>
          )}
        </Container>
      </main>
    </div>
  );
}
