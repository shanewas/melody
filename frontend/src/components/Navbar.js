import React from "react";
import { useHistory } from "react-router-dom";
import {
  CssBaseline,
  Grid,
  Typography,
  Container,
  makeStyles,
  withStyles,
  Menu,
  MenuItem,
  Button,
  AppBar,
  Toolbar,
  ListItemIcon,
  ListItemText,
  IconButton,
  Fade,
} from "@material-ui/core";
import { ExpandMore, ArrowForwardIos } from "@material-ui/icons";
import theme from "../theme";

import logo from "../assets/images/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  ListItemIcon: {
    color: theme.palette.common.white,
  },
  logo: {
    padding: theme.spacing(2),
  },
  buttonSpace:{
    marginLeft: "auto"
  }
}));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: theme.palette.primary.light,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const StyledMenu = withStyles({
  paper: {
    background: theme.palette.primary.main,
  },
})((props) => (
  <Menu
    elevation={10}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const history = useHistory();
  function navigateTo() {
    history.push("/login");
  }
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Menu />
          </IconButton> */}
          {/* <Typography variant="h6" className={classes.title} align="left">
            MethodMelody
          </Typography> */}
          <img
            className={classes.logo}
            src={logo}
            alt="MethodMelody"
            height="auto"
            width="200"
          />
          <Button
            color="inherit"
            variant="text"
            endIcon={<ExpandMore />}
            onClick={handleClick}
            flexGrow="1"
            className={classes.buttonSpace}
          >
            Browse
          </Button>

          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <StyledMenuItem>
              <ListItemText primary="Sent mail" />
              <ListItemIcon className={classes.ListItemIcon}>
                <ArrowForwardIos fontSize="small" />
              </ListItemIcon>
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemText primary="Drafts" />
              <ListItemIcon className={classes.ListItemIcon}>
                <ArrowForwardIos fontSize="small" />
              </ListItemIcon>
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemText primary="Inbox" />
              <ListItemIcon className={classes.ListItemIcon}>
                <ArrowForwardIos fontSize="small" />
              </ListItemIcon>
            </StyledMenuItem>
          </StyledMenu>

          <Button color="inherit" variant="text" onClick={navigateTo}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
