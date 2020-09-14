import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
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
} from "@material-ui/core";
import {
  ExpandMore,
  Forum,
  ArrowBackIos,
  AccountCircle,
  ShoppingCart,
  CastForEducation,
  ExitToApp,
} from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import theme from "../theme";

import logo from "../assets/images/logo.png";
import logoShort from "../assets/images/short_logo.png";

import axios from "../api/Config";
import auth from "../routes/auth";
import { positions } from "@material-ui/system";

const ITEM_HEIGHT = 48;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    margin: "0px",
  },
  logo: {
    flexGrow: 1,
    [theme.breakpoints.up("md")]: {
      flexGrow: 1,
    },
  },
  button: {
    "&:focus": {
      outline: "none",
    },
    "&:active": {
      outline: "none",
    },
  },
  sectionLogoLeftDesktop: {
    flexGrow:1,
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
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
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      // backgroundColor: theme.palette.secondary.main,
    },
  },
}))(MenuItem);

//Courses Menu
const StyledMenu = withStyles({
  paper: {},
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

export default function Navbar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mucisiansAnchorEl, setMucisiansAnchorEl] = React.useState(null);
  const [userAnchorEl, setUserAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [instructorList, setInstructorList] = useState([]);

  useEffect(() => {
    getInstructors();
  }, []);

  //get all instructor list from server later it will be list of all featured instructors
  function getInstructors() {
    axios
      .get("instructor/", {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        },
      })
      .then((res) => {
        const instructorList = res.data;
        setInstructorList(instructorList);
        console.log(
          "instructor list fetched in navbar: " + instructorList[0].photo
        );
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

  //User menu click handlers
  const handleUsersClick = (event) => {
    setUserAnchorEl(event.currentTarget);
  };

  const handleMusiciansClose = () => {
    setMucisiansAnchorEl(null);
  };

  const handleUsersClose = () => {
    setUserAnchorEl(null);
  };

  //Mobile menu click handlers
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  // function setAuth(){
  //   if(auth.isAuthenticated){

  //   }
  // }

  const history = useHistory();
  function loginControl() {
    if (auth.isAuthenticated()) {
      auth.logout();
      history.push("/");
    } else {
      history.push("/login");
    }
  }

  function goToAdminDash() {
    history.push("/admin");
  }

  function navigateToUser(userSection) {
    switch (userSection) {
      case "My Classroom":
        history.push("/studentpanel");
        break;
      case "Logout":
        if (auth.isAuthenticated()) {
          auth.logout();
          history.push("/");
        }
        break;
    }
  }

  function navigateToCourse(course) {
    history.push("/course/all", course);
  }
  function navigateToHome() {
    history.push("/");
  }

  const userList = [
    {
      title: "My Classroom",
      icon: (
        <CastForEducation
          style={{ color: theme.palette.primary.contrastText }}
        />
      ),
    },
    {
      title: "My Profile",
      icon: (
        <AccountCircle style={{ color: theme.palette.primary.contrastText }} />
      ),
    },
    {
      title: "My Messages",
      icon: <Forum style={{ color: theme.palette.primary.contrastText }} />,
    },
    {
      title: "Logout",
      icon: <ExitToApp style={{ color: theme.palette.primary.contrastText }} />,
    },
  ];

  const categoryList = [
    {
      primary: "Guitar",
      alt: "Guitar",
      src:
        "https://i1.pngguru.com/preview/844/649/188/button-ui-2-apple-paid-pro-guitar-icon-png-clipart.jpg",
    },
    {
      primary: "Acoustic Fingerstyle Guitar",
      alt: "Acoustic Fingerstyle guitar",
      src: "https://image.flaticon.com/icons/png/512/176/176540.png",
    },
    {
      primary: "Drums",
      alt: "Drums",
      src:
        "https://imageog.flaticon.com/icons/png/512/1803/1803943.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF",
    },
    {
      primary: "Piano/Keyboard",
      alt: "Piano/Keyboard",
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxbm59tHjLaXC1joj-gB2Mid9SXnZ7KZTX3A&usqp=CAU",
    },
    {
      primary: "Sound Engineering",
      alt: "Sound Engineering",
      src:
        "https://imageog.flaticon.com/icons/png/512/2198/2198024.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF",
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <div className={classes.sectionLogoLeftDesktop}>
            <img
              src={logo}
              alt="MethodMelody"
              height="auto"
              width="100ch"
              onClick={navigateToHome}
            />
          </div>

          <div className={classes.sectionDesktop}>
            <Button
              color="inherit"
              variant="text"
              onClick={goToAdminDash}
              className={classes.button}
            >
              Admin
            </Button>
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
              {categoryList.map((courseCategory, index) => (
                <StyledMenuItem
                  alignItems="center"
                  onClick={() => {
                    navigateToCourse(courseCategory.primary);
                  }}
                >
                  <ListItemAvatar>
                    <Avatar alt={courseCategory.alt} src={courseCategory.src} />
                  </ListItemAvatar>
                  <ListItemText primary={courseCategory.primary} />
                </StyledMenuItem>
              ))}
            </StyledMenu>
          </div>
          <div className={classes.sectionDesktop}>
            <Button
              color="inherit"
              variant="text"
              endIcon={<ExpandMore />}
              onClick={handleMusiciansClick}
              className={classes.button}
            >
              Musicians
            </Button>

            <StyledMenu
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
                <StyledMenuItem alignItems="center" onClick={navigateToCourse}>
                  <ListItemAvatar>
                    <Avatar
                      alt={instructor.name}
                      src={"http://162.0.231.67/" + instructor.photo}
                    />
                  </ListItemAvatar>
                  <ListItemText primary={instructor.name} />
                </StyledMenuItem>
              ))}
            </StyledMenu>
          </div>
          <div className={classes.sectionDesktop}>
            <Button color="inherit" variant="text" className={classes.button}>
              Cart
            </Button>
          </div>
          {auth.isAuthenticated() !== true && (
            <div className={classes.sectionDesktop}>
              <Button
                color="inherit"
                variant="text"
                className={classes.button}
                onClick={loginControl}
              >
                Login
              </Button>
            </div>
          )}
          {auth.isAuthenticated() === true && (
            <div className={classes.sectionDesktop}>
              <Button
                color="inherit"
                variant="text"
                className={classes.button}
                onClick={handleUsersClick}
                endIcon={<ExpandMore />}
              >
                {localStorage.getItem("name")
                  ? localStorage.getItem("name")
                  : ""}
              </Button>
              <StyledMenu
                id="customized-menu"
                anchorEl={userAnchorEl}
                keepMounted
                open={Boolean(userAnchorEl)}
                onClose={handleUsersClose}
                TransitionComponent={Fade}
                //setting menu height and width
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                  },
                }}
              >
                {userList.map((userListItem, index) => (
                  <StyledMenuItem
                    alignItems="center"
                    onClick={() => navigateToUser(userListItem.title)}
                  >
                    <ListItemIcon>{userListItem.icon}</ListItemIcon>
                    <ListItemText primary={userListItem.title} />
                  </StyledMenuItem>
                ))}
              </StyledMenu>
            </div>
          )}

          <div className={classes.sectionMobile}>
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
            <StyledMenu
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
            </StyledMenu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
