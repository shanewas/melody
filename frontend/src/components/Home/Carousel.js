import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { ChevronRight, ChevronLeft } from "@material-ui/icons";
import {
  Fab,
  Button,
  Grid,
  Typography,
  makeStyles,
  withStyles,
} from "@material-ui/core";

import theme from "../../theme";
import axios from "../../api/Config";

const useStyles = makeStyles((theme) => ({
  Fab: {
    "&:focus": {
      outline: "none",
    },
    "&:active": {
      outline: "none",
    },
  },
}));

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
  background: theme.palette.primary.dark,
};

const buttonStyles = {
  zIndex: 2,
  top: "calc(50% - 15px)",
  background: "#821518",
};
export default function MCarousel() {
  const classes = useStyles();
  const [instructor, setInstructor] = useState([]);

  useEffect(() => {
    getInstructorData();
  }, []);

  function getInstructorData() {
    axios
      .get("instructor/", {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        },
      })
      .then((res) => {
        const data = res.data;

        // setState({ video: url });
        setInstructor(data);
        console.log("instructor carousel: " + data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Grid container direction="row" justify="flex-end">
      <Grid item lg={12}>
        <Carousel
          autoPlay
          width="100%"
          showIndicators="false"
          {...getConfigurableProps()}
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <ChevronRight
                color="secondary"
                aria-label="add"
                onClick={onClickHandler}
                title={label}
                style={{
                  ...arrowStyles,
                  right: 10,
                  backgroundColor: "#00000000",
                  color: theme.palette.secondary.main,
                }}
                className={classes.Fab}
              />
            )
          }
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <ChevronLeft
                color="secondary"
                aria-label="sub"
                onClick={onClickHandler}
                title={label}
                style={{
                  ...arrowStyles,
                  left: 10,
                  backgroundColor: "#00000000",
                  color: "#b02020",
                }}
                className={classes.Fab}
              />
            )
          }
        >
          {instructor.map((instructor) => (
            <div>
              <img
                alt=""
                src={"http://162.0.231.67/" + instructor.photo}
                height="500"
              />
            </div>
          ))}
          ;
        </Carousel>
      </Grid>
      <Grid item>
        <Button
          // style={{ backgroundColor: "#b02020", color: "#fff" }}
          size="large"
          color="primary"
        >
          Let's Get Started
        </Button>
      </Grid>
    </Grid>
  );
}
