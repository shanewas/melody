import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
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
    paddingTop: '0%', // 16:9
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
						MethodMelody
					</Typography>
          {/* <CardMedia
            className={classes.media}
            image="https://www.nokia.com/sites/default/files/styles/large/public/2020-03/M75_MWC_en_int_desktop%402x.jpg?h=7afba369"
            title="Paella dish"
          /> */}
          <ShoppingCartIcon fontSize="small" />
          <Button color="inherit">
            <Typography variant="body2">Cart</Typography>
          </Button>
          <PersonIcon fontSize="small" />
          <Button color="inherit">
            <Typography variant="body2">Login</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
