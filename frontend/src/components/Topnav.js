import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  InputBase,
  Menu,
  MenuItem,
  withStyles,
  ListItemIcon,
  ListItemText,
  CardMedia,
} from "@material-ui/core";
import { ArrowForwardIos } from "@material-ui/icons";

import { Person, ExpandMore, ShoppingCart, Search } from "@material-ui/icons";

import "../theme";

import { useHistory } from "react-router-dom";

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

const StyledMenu = withStyles({
  paper: {
    background: "#191c21",
  },
})((props) => (
  <Menu
    elevation={0}
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

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function ButtonAppBar() {
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
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <div>
            <Button
              aria-controls="customized-menu"
              aria-haspopup="true"
              color="inherit"
              variant="text"
              endIcon={<ExpandMore />}
              onClick={handleClick}
            >
              Learn
            </Button>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <StyledMenuItem>
                <ListItemIcon>
                  <ArrowForwardIos fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Sent mail" />
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemIcon>
                  <ArrowForwardIos fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemIcon>
                  <ArrowForwardIos fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </StyledMenuItem>
            </StyledMenu>
          </div>
          <div>
            <Button
              aria-controls="customized-menu"
              aria-haspopup="true"
              color="inherit"
              variant="text"
              endIcon={<ExpandMore />}
              onClick={handleClick}
            >
              Teach
            </Button>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <StyledMenuItem>
                <ListItemIcon>
                  <ArrowForwardIos fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Sent mail" />
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemIcon>
                  <ArrowForwardIos fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemIcon>
                  <ArrowForwardIos fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </StyledMenuItem>
            </StyledMenu>
          </div>

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
          <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            color="inherit"
            variant="text"
            startIcon={<ShoppingCart />}
          >
            Cart
          </Button>
          <Button
            color="inherit"
            aria-controls="customized-menu"
            aria-haspopup="true"
            color="inherit"
            variant="text"
            startIcon={<Person />}
            onClick={navigateTo}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
