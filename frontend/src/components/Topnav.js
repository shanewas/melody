import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  InputBase,
} from "@material-ui/core";

import {
  Menu,
  Person,
  ExpandMore,
  ShoppingCart,
  Search,
} from "@material-ui/icons";

import "../theme";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  media: {
    height: 0,
    paddingTop: "0%", // 16:9
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Button color="inherit">
            <Typography variant="body2">Learn</Typography>
          </Button>
          <ExpandMore />
          <Button color="inherit">
            <Typography variant="body2">Teach</Typography>
          </Button>
          <ExpandMore />

          <Search className={classes.searchIcon} fontSize="medium"/>

          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
          <Typography variant="h6" className={classes.title}>
            MethodMelody
          </Typography>
          {/* <CardMedia
            className={classes.media}
            image="https://www.nokia.com/sites/default/files/styles/large/public/2020-03/M75_MWC_en_int_desktop%402x.jpg?h=7afba369"
            title="Paella dish"
          /> */}
          <ShoppingCart fontSize="small" />
          <Button color="inherit">
            <Typography variant="body2">Cart</Typography>
          </Button>
          <Person fontSize="small" />
          <Button color="inherit">
            <Typography variant="body2">Login</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
