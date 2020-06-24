import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  InputBase,
} from "@material-ui/core";

import { Person, ExpandMore, ShoppingCart, Search } from "@material-ui/icons";

import "../theme";

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
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            color="inherit"
            variant="text"
            endIcon={<ExpandMore />}
            // onClick={handleClick}
          >
            Learn
          </Button>

          <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            color="inherit"
            variant="text"
            endIcon={<ExpandMore />}
          >
            Teach
          </Button>

          <Search className={classes.searchIcon} fontSize="medium" />

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
          <Button  aria-controls="customized-menu"
            aria-haspopup="true"
            color="inherit"
            variant="text"
            startIcon={<ShoppingCart />}>
            Cart
          </Button>
          <Button color="inherit"
           aria-controls="customized-menu"
           aria-haspopup="true"
           color="inherit"
           variant="text"
           startIcon={<Person />}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
