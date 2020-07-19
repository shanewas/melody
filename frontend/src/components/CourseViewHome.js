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
import CardThumbnailCourse from "./CardThumbnailCourse";
import { ChevronRight } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
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
    color: theme.palette.primary.light,
    marginTop: theme.spacing(10),
    background: "#821518",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container>
          {/* End hero unit */}
          <Typography
            variant="h4"
            component="h4"
            className={classes.Typography}
          >
            Over 350 in-depth courses for you to pick from
          </Typography>
          <Grid container spacing={2}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={12} md={2} lg={2}>
                <CardThumbnailCourse />
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
          View All Courses
        </Button>
      </main>
    </React.Fragment>
  );
}
