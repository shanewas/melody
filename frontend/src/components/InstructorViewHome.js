import React from "react";
import {
  CssBaseline,
  Grid,
  Typography,
  Container,
  makeStyles,
  Button,
} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import CardThumbnailInstructor from "./CardThumbnailInstructor";
import { ChevronRight } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  cardGrid: {},
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  Typography: {
    marginBottom: theme.spacing(8),
    color: theme.palette.secondary.contrastText,
  },
  Button: {
    marginTop: theme.spacing(10),
    color: theme.palette.primary.light,
    background: "#821518",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

export default function InstructorViewHome(props) {
  const classes = useStyles();

  const instructorList = props.instructors;
  console.log(
    "instructor list inside InstructorViewHome: " + instructorList.length
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid}>
          {/* End hero unit */}
          <Typography
            variant="h4"
            component="h4"
            className={classes.Typography}
          >
            Learn from the Best of the Best
          </Typography>
          <Grid container spacing={2}>
            {instructorList.map((instructor) => (
              <Grid item key={instructor} xs={12} sm={12} md={2} lg={2}>
                <CardThumbnailInstructor instructor={instructor} />
              </Grid>
            ))}
          </Grid>
        </Container>
        <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          color="inherit"
          variant="contained"
          endIcon={<ChevronRight />}
          className={classes.Button}
          size="large"
        >
          View All Instructors
        </Button>
      </main>
    </React.Fragment>
  );
}
