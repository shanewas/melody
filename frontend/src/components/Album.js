import React from "react";
import {
  CssBaseline,
  Grid,
  Typography,
  Container,
  makeStyles,
} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import CardThumbnailCourse from "./CardThumbnailCourse";
import { ChevronRight } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  Typography: {
    marginBottom: theme.spacing(8),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

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
            Over 35 in-depth courses for you to pick from
          </Typography>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
                <CardThumbnailCourse />
              </Grid>
            ))}
          </Grid>          
        </Container>
        <Grid container direction="row" justify="center" className={classes.Typography}>
          <Grid item>
            <Typography variant="h6" component="h6">
              View all courses
            </Typography>
          </Grid>
          <Grid item>
            <ChevronRight className={classes.arrow} fontSize="large" />
          </Grid>
        </Grid>
      </main>
      
    </React.Fragment>
  );
}
