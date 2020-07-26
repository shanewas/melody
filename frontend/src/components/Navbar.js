import React, { useEffect, useState } from "react";
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
  ListItemAvatar,
  Avatar,
  IconButton,
  Fade,
  Divider,
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
import logoShort from "../assets/images/short_logo.png";
import CoursesCategories from "../data/CourseCategoryData";
import MusiciansList from "../data/MusiciansListData";
import axios from "../api/Config";

const ITEM_HEIGHT = 48;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: theme.palette.secondary.main,
  },

  button: {
    color: theme.palette.secondary.contrastText,
    "&:focus": {
      outline: "none",
    },
    "&:active": {
      outline: "none",
    },
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
    color: theme.palette.background.paper,
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: theme.palette.secondary.contrastText,
      color: theme.palette.common.white,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

//Courses Menu
const StyledMenu = withStyles({
  paper: {
    background: theme.palette.secondary.main,
  },
})((props) => (
  <Menu
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

//Musicians Menu
const StyledMenuMusicians = withStyles({
  paper: {
    background: theme.palette.secondary.main,
  },
})((props) => (
  <Menu
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

//Mobile view menu
const StyledMenuMobile = withStyles({
  paper: {
    background: theme.palette.secondary.main,
  },
})((props) => (
  <Menu
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

export default function Navbar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mucisiansAnchorEl, setMucisiansAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [instructorList, setInstructorList] = useState([]);

  useEffect(() => {
    getInstructors();
  }, []);

  //get all instructor list from server later it will be list of all featured instructors
  function getInstructors() {
    axios.get("instructor/", {}).then((res) => {
      const instructorList = res.data;
      setInstructorList(instructorList);
      console.log("instructor list fetched in navbar: " + instructorList[0].photo);
    });
  }

  // const instructorList = props.instructors;
  console.log("instructor list inside NavBar: " + instructorList);

  //Course menu click handlers
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //Musicians menu click handlers
  const handleMusiciansClick = (event) => {
    setMucisiansAnchorEl(event.currentTarget);
  };

  const handleMusiciansClose = () => {
    setMucisiansAnchorEl(null);
  };

  //Mobile menu click handlers
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const history = useHistory();
  function navigateToLogin() {
    history.push("/login");
  }
  function navigateToCourse() {
    history.push("/coursespage");
  }
  function navigateToHome() {
    history.push("/");
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ background: "#fff" }}>
        <Toolbar>
          <Grid container direction="row">
            <Grid
              item
              container
              justify="flex-start"
              className={classes.sectionDesktop}
              lg={4}
            >
              <img
                src={logo}
                alt="MethodMelody"
                height="auto"
                width="100ch"
                onClick={navigateToHome}
              />
            </Grid>
            <Grid item container justify="center" lg={4}>
              <img
                src={logoShort}
                alt="MethodMelody"
                height="auto"
                width="40"
              />
            </Grid>
            <Grid
              lg={4}
              item
              container
              justify="flex-end"
              className={classes.sectionDesktop}
            >
              <Grid item>
                <Button
                  color="inherit"
                  variant="text"
                  endIcon={<ExpandMore />}
                  onClick={handleClick}
                  className={classes.button}
                >
                  Courses
                </Button>
                <StyledMenu
                  id="customized-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: "40ch",
                    },
                  }}
                >
                  {CoursesCategories.map((courseCategory, index) => (
                    <StyledMenuItem
                      alignItems="center"
                      onClick={navigateToCourse}
                    >
                      <ListItemAvatar>
                        <Avatar
                          alt={courseCategory.alt}
                          src={courseCategory.src}
                        />
                      </ListItemAvatar>
                      <ListItemText primary={courseCategory.primary} />
                    </StyledMenuItem>
                  ))}
                </StyledMenu>
              </Grid>
              <Grid item>
                <Button
                  color="inherit"
                  variant="text"
                  endIcon={<ExpandMore />}
                  onClick={handleMusiciansClick}
                  className={classes.button}
                >
                  Musicians
                </Button>

                <StyledMenuMusicians
                  id="customized-menu"
                  anchorEl={mucisiansAnchorEl}
                  keepMounted
                  open={Boolean(mucisiansAnchorEl)}
                  onClose={handleMusiciansClose}
                  TransitionComponent={Fade}
                  //setting menu height and width
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: "50ch",
                    },
                  }}
                >
                  {instructorList.map((instructor, index) => (
                    <StyledMenuItem
                      alignItems="center"
                      onClick={navigateToCourse}
                    >
                      <ListItemAvatar>
                        <Avatar alt={instructor.name} src={"http://162.0.231.67/"+instructor.photo} />
                      </ListItemAvatar>
                      <ListItemText primary={instructor.name} />
                    </StyledMenuItem>
                  ))}
                </StyledMenuMusicians>
              </Grid>
              <Grid item>
                <Button
                  color="inherit"
                  variant="text"
                  className={classes.sectionDesktop && classes.button}
                >
                  Cart
                </Button>
              </Grid>
              <Grid item>
                <Button
                  color="inherit"
                  variant="text"
                  className={classes.button}
                  onClick={navigateToLogin}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
            <Grid
              item
              container
              justify="flex-end"
              className={classes.sectionMobile}
              lg={2}
            >
              <IconButton
                aria-label="show more"
                // aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
                className={classes.button}
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
                  <ListItemIcon>
                    <AccountCircle fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Login" />
                </StyledMenuItem>
                <StyledMenuItem>
                  <ListItemIcon>
                    <ShoppingCart fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Cart" />
                </StyledMenuItem>
                <StyledMenuItem onClick={handleClick}>
                  <ListItemIcon>
                    <ArrowBackIos fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Browse" />
                </StyledMenuItem>
              </StyledMenuMobile>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
