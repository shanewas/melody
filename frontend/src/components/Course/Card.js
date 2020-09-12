import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, Box } from "@material-ui/core";
import theme from "../../theme";
const useStyles = makeStyles({
  root: {
    height: "100%",
    maxWidth: 650,
    [theme.breakpoints.down("lg")]: {
      maxWidth: 250,
    },
  },
  media: {
    height: 440,
    [theme.breakpoints.down("lg")]: {
      height: 140,
    },
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  const courseList = props.courses;

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      spacing={theme.spacing}
    >
      {courseList.map((course) => (
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={"http://162.0.231.67/" + course.thumbnail}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  color="primary"
                >
                  <Box fontWeight="fontWeightMedium">{course.title}</Box>
                </Typography>
                {/* <Typography variant="body2" align="left" color="primary">
                  <Box fontWeight="fontWeightMedium" fontStyle="italic">
                    {course.subtitle}
                  </Box>
                </Typography>
                <Grid container direction="row" justify="space-between">
                  <Grid item>
                    {" "}
                    <Typography
                      variant="body2"
                      align="left"
                      color="primary"
                    >{`Category: ${course.catagory}`}</Typography>
                  </Grid>
                  <Grid item>
                    {" "}
                    <Typography
                      variant="body2"
                      align="left"
                      color="primary"
                    >{`Level: ${course.level}`}</Typography>
                  </Grid>
                  <Grid item>
                    {" "}
                    <Typography
                      variant="body2"
                      align="left"
                      color="primary"
                    >{`Module: ${course.sublevel}`}</Typography>
                  </Grid>
                </Grid> */}
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
