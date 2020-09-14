import React from "react";
import { Typography, makeStyles, AppBar, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    color: theme.palette.secondary.contrastText
  },
}));
export default function Appbar (props) {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
