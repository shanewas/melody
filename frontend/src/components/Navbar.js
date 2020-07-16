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
import {
  ExpandMore,
  ArrowForwardIos,
  ArrowBackIos,
  AccountCircle,
  ShoppingCart,
} from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
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
  buttonSpace: {
    marginLeft: "auto",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.common.white,
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
      vertical:"bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuMobile = withStyles({
  paper: {
    background: theme.palette.primary.main,
  },
})((props) => (
  <Menu
    elevation={10}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
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

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  //Browse menu click handlers
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //Mobile menu click handlers
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
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
          <div style={{ flexGrow: 1 }} />
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              // aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <StyledMenuMobile
              id="customized-menu"
              anchorEl={mobileMoreAnchorEl}
              keepMounted
              open={Boolean(mobileMoreAnchorEl)}
              onClose={handleMobileMenuClose}
              TransitionComponent={Fade}
            >
              <StyledMenuItem>
                <ListItemIcon className={classes.ListItemIcon}>
                  <AccountCircle fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Login" />
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemIcon className={classes.ListItemIcon}>
                  <ShoppingCart fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Cart" />
              </StyledMenuItem>
              <StyledMenuItem onClick={handleClick}>
                <ListItemIcon className={classes.ListItemIcon}>
                  <ArrowBackIos fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Browse" />
              </StyledMenuItem>
            </StyledMenuMobile>
          </div>
          <div className={classes.sectionDesktop}>
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
                <ListItemText primary="Guitar" />
                <ListItemIcon className={classes.ListItemIcon}>
                  <ArrowForwardIos fontSize="small" />
                </ListItemIcon>
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemText primary="Drum" />
                <ListItemIcon className={classes.ListItemIcon}>
                  <ArrowForwardIos fontSize="small" />
                </ListItemIcon>
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemText primary="Keyboard" />
                <ListItemIcon className={classes.ListItemIcon}>
                  <ArrowForwardIos fontSize="small" />
                </ListItemIcon>
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemText primary="Vocal" />
                <ListItemIcon className={classes.ListItemIcon}>
                  <ArrowForwardIos fontSize="small" />
                </ListItemIcon>
              </StyledMenuItem>
            </StyledMenu>

            <Button color="inherit" variant="text" startIcon={<AccountCircle />}>
              Login
            </Button>
          </div>
          <Button color="inherit" variant="text" startIcon={<ShoppingCart />} className={classes.sectionDesktop}>
            Cart
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
