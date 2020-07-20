import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { ChevronRight, ChevronLeft } from "@material-ui/icons";
import { Fab, Button, Grid, Typography } from "@material-ui/core";

import theme from "../theme";
import axios from "../api/Config";

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
export default function InstructorCarousel() {
  const [instructor, setInstructor] = useState([]);

  useEffect(() => {
    getInstructorData();
  });

  function getInstructorData() {
    axios
      .get("instructor/", {})
      .then((res) => {
        const data = res.data;

        // setState({ video: url });
        setInstructor(data[data.length - 2]);
        console.log("instructor carousel: " + data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Carousel
      autoPlay
      width="100%"
      {...getConfigurableProps()}
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <Fab
            color="primary"
            aria-label="add"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, right: 10 }}
          >
            <ChevronRight />
          </Fab>
        )
      }
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <Fab
            color="primary"
            aria-label="sub"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, left: 10 }}
          >
            <ChevronLeft />
          </Fab>
        )
      }
    >
      <div>
        <img
          alt=""
          src="https://www.masterclass.com/course-images/images/11345/original/1592437234-TH_cinematic_12x5.jpg?width=500&dpr=2"
        />
        <Grid
          container
          direction="column"
          className="legend"
          spacing={theme.spacing(0.3)}
          lg={12}
          style={{ backgroundColor: "rgba(255,255,255,.0)" }}
        >
          <Grid item lg={12}>
            <Typography variant="h4">Tony Hawk</Typography>
          </Grid>
          <Grid item lg={12}>
            <Typography variant="subtitle1">Teaches Guitar</Typography>
          </Grid>
          <Grid item lg={12}>
            <Button
              variant="contained"
              color="primary"
              style={{ ...buttonStyles }}
              size="small"
            >
              Details
            </Button>
          </Grid>
        </Grid>
      </div>

      <div>
        <img
          alt=""
          src="https://www.masterclass.com/course-images/images/7746/original/1576544221-CV_cinematic_12x5.jpg?width=500&dpr=2"
        />
        <Grid
          container
          direction="column"
          className="legend"
          spacing={theme.spacing(0.3)}
          lg={12}
          style={{ backgroundColor: "rgba(255,255,255,.0)" }}
        >
          <Grid item lg={12}>
            <Typography variant="h4">Chris Voss</Typography>
          </Grid>
          <Grid item lg={12}>
            <Typography variant="subtitle1">Teaches Guitar</Typography>
          </Grid>
          <Grid item lg={12}>
            <Button
              variant="contained"
              color="primary"
              style={{ ...buttonStyles }}
              size="small"
            >
              Details
            </Button>
          </Grid>
        </Grid>
      </div>

      <div>
        {console.log(instructor.photo)}
        <img alt="" src={"http://162.0.231.67/" + instructor.photo} />
        <Grid
          container
          direction="column"
          className="legend"
          spacing={theme.spacing(0.3)}
          lg={12}
          style={{ backgroundColor: "rgba(255,255,255,.0)" }}
        >
          <Grid item lg={12}>
            <Typography variant="h4">{instructor.name}</Typography>
          </Grid>
          <Grid item lg={12}>
            <Typography variant="subtitle1">Teaches Keyboard/Piano</Typography>
          </Grid>
          <Grid item lg={12}>
            <Button
              variant="contained"
              color="primary"
              style={{ ...buttonStyles }}
              size="small"
            >
              Details
            </Button>
          </Grid>
        </Grid>
      </div>
    </Carousel>
  );
}