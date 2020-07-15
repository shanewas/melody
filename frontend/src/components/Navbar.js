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

const ITEM_HEIGHT = 48;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: theme.palette.secondary.main,
  },
  ListItemIcon: {
    color: theme.palette.secondary.contrastText,
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
    color: theme.palette.secondary.contrastText,
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

//Courses Menu
const StyledMenu = withStyles({
  paper: {
    background: theme.palette.primary.main,
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

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mucisiansAnchorEl, setMucisiansAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

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
  function navigateTo() {
    history.push("/login");
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
              <img src={logo} alt="MethodMelody" height="auto" width="100ch" />
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
                      width: "30ch",
                    },
                  }}
                >
                  <StyledMenuItem alignItems="center">
                    <ListItemAvatar>
                      <Avatar
                        alt="Guitar"
                        src="https://icon-library.com/images/guitar-icon/guitar-icon-23.jpg"
                      />
                    </ListItemAvatar>
                    <ListItemText primary="Guitar" />
                  </StyledMenuItem>
                  <StyledMenuItem>
                    <ListItemAvatar>
                      <Avatar
                        alt="vocal"
                        src="https://www.pngjoy.com/pngm/190/3748338_jedi-order-symbol-rock-band-microphone-logo-transparent.png"
                      />
                    </ListItemAvatar>
                    <ListItemText primary="vocal" />
                  </StyledMenuItem>
                  <StyledMenuItem>
                    <ListItemAvatar>
                      <Avatar
                        alt="Drum"
                        src="https://www.pinclipart.com/picdir/middle/70-704416_the-beatles-rock-band-clip-art-black-and.png"
                      />
                    </ListItemAvatar>
                    <ListItemText primary="Drum" />
                  </StyledMenuItem>
                  <StyledMenuItem>
                    <ListItemAvatar>
                      <Avatar
                        alt="Keyboard"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/RB_keyboard_icon.svg/1024px-RB_keyboard_icon.svg.png"
                      />
                    </ListItemAvatar>
                    <ListItemText primary="Keyboard" />
                  </StyledMenuItem>
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
                  <StyledMenuItem alignItems="center">
                    <ListItemAvatar>
                      <Avatar
                        alt="Ibrahim Ahmed Kamal"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTf9gxEaevS1beCdbVG6YfVSMA1RMxaT_-kbw&usqp=CAU"
                      />
                    </ListItemAvatar>
                    <ListItemText primary="Ibrahim Ahmed Kamal" />
                    <Divider height={1} />
                  </StyledMenuItem>
                  <StyledMenuItem>
                    <ListItemAvatar>
                      <Avatar
                        alt="Oni Hasan"
                        src="https://s3.amazonaws.com/bit-photos/large/6301099.jpeg"
                      />
                    </ListItemAvatar>
                    <ListItemText primary="Oni Hasan" />
                  </StyledMenuItem>
                  <StyledMenuItem>
                    <ListItemAvatar>
                      <Avatar
                        alt="Kazi Shazzadul Asheqeen Shaju"
                        src="https://scontent.fdac25-1.fna.fbcdn.net/v/t1.0-9/60601214_808016059568906_4171004618462986240_n.jpg?_nc_cat=108&_nc_sid=8bfeb9&_nc_eui2=AeHLg7gJl-F9cKJduQFHh5hV9Qs4DhZ8lzz1CzgOFnyXPBLq42ot7n9i5caVBMUW-R0&_nc_ohc=7IWv3lq1hGMAX9ZyVGO&_nc_ht=scontent.fdac25-1.fna&oh=466b8ec155c1014bc3e05ae2013bfcf9&oe=5F34F574"
                      />
                    </ListItemAvatar>
                    <ListItemText primary="Kazi Shazzadul Asheqeen Shaju" />
                  </StyledMenuItem>
                  <StyledMenuItem>
                    <ListItemAvatar>
                      <Avatar
                        alt="Raef al Hasan Rafa"
                        src="https://live.staticflickr.com/1495/24935624883_11c773493d_b.jpg"
                      />
                    </ListItemAvatar>
                    <ListItemText primary="Raef al Hasan Rafa" />
                  </StyledMenuItem>
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
                  onClick={navigateTo}
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

          {/* 

          <div >
            
          </div>
          

            

            

        
          </div> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
