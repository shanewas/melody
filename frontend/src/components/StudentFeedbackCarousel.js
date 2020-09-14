import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  CardActionArea,
  CardActions,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import { ChevronRight, ChevronLeft } from "@material-ui/icons";
import {
  Fab,
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";

import theme from "../theme";

const useStyles = makeStyles({
  media: {
    height: 300,
  },
  root: {
    // paddingTop: theme.spacing(3),
    background: theme.palette.primary.main,
  },

  Fab: {
    "&:focus": {
      outline: "none",
    },
    "&:active": {
      outline: "none",
    },
  },
});

const getConfigurableProps = () => ({
  showArrows: true,
  showStatus: false,
  showIndicators: true,
  infiniteLoop: true,
  showThumbs: false,
  useKeyboardArrows: true,
  autoPlay: false,
  stopOnHover: true,
  swipeable: true,
  dynamicHeight: true,
  emulateTouch: true,
});

const arrowStyles = {
  position: "absolute",
  zIndex: 2,
  top: "calc(50% - 15px)",
  cursor: "pointer",
};

export default function StudentFeedback() {
  const classes = useStyles();
  return (
    <Carousel
      autoPlay
      width="100%"
      {...getConfigurableProps()}
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <ChevronRight
            color="primary"
            aria-label="add"
            onClick={onClickHandler}
            title={label}
            style={{
              ...arrowStyles,
              right: 10,
              backgroundColor: "#001A1A1A",
              color: theme.palette.secondary.main,
            }}
            className={classes.Fab}
          />
        )
      }
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <ChevronLeft
            color="primary"
            aria-label="sub"
            onClick={onClickHandler}
            title={label}
            style={{
              ...arrowStyles,
              left: 10,
              backgroundColor: "#00000000",
              color: theme.palette.secondary.main,
            }}
            className={classes.Fab}
          />
        )
      }
    >
      <div className={classes.root}>
        <Card>
          <Grid container direction="row" justify="center" align="center">
            <Grid item xs={5}>
              {" "}
              <CardMedia
                className={classes.media}
                image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                title="Contemplative Reptile"
              />
            </Grid>
            <Grid item xs={7} container alignItems="center">
              <CardContent>
                <Typography variant="h5" component="h2" align="left">
                  John Doe
                </Typography>
                <Typography variant="body2" component="p" align="left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Potius inflammat, ut coercendi magis quam dedocendi esse
                  videantur. Quid, quod homines infima fortuna, nulla spe rerum
                  gerendarum, opifices denique delectantur historia? Apud
                  ceteros autem philosophos, qui quaesivit aliquid, tacet; Duo
                  Reges: constructio interrete.
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </div>
      <div className={classes.root}>
        <Card>
          <Grid container direction="row" justify="center" align="center">
            <Grid item xs={5}>
              {" "}
              <CardMedia
                className={classes.media}
                image="https://qph.fs.quoracdn.net/main-qimg-6291c3a117fc230c82785148baef7eed"
                title="Contemplative Reptile"
              />
            </Grid>
            <Grid item xs={7} alignItems="center" container>
              <CardContent>
                <Typography variant="h5" component="h2" align="left">
                  Anna Sthesia
                </Typography>
                <Typography variant="body2" component="p" align="left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Potius inflammat, ut coercendi magis quam dedocendi esse
                  videantur. Quid, quod homines infima fortuna, nulla spe rerum
                  gerendarum, opifices denique delectantur historia? Apud
                  ceteros autem philosophos, qui quaesivit aliquid, tacet; Duo
                  Reges: constructio interrete.
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </div>
    </Carousel>
  );
}
