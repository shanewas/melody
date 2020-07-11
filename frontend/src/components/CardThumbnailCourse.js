import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
} from "@material-ui/core";
import theme from "../theme";

const useStyles = makeStyles({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    background: theme.palette.primary.light,
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  button: {
    background: "rgba(225, 7, 18, .87)",
    color: "rgba(255,255,255,.87)",
  },
});

export default function CardThumbnailCourse() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image="https://opend-licklibrary-com.akamaized.net/images/courses/thumbnails/thumbnail-course-51ExtremeShredLicks-RDR0528.jpg"
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6" component="h6">Course</Typography>
        <Typography>Course description</Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="large" className={classes.button} fullWidth="true">
          View
        </Button>
      </CardActions> */}
    </Card>
  );
}
