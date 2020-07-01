import React from "react";
import {} from "@material-ui/core/styles";

import {
  Grid,
  Avatar,
  ListItemText,
  ListItemAvatar,
  ListItem,
  List,
  makeStyles,
  Divider,
} from "@material-ui/core";

import { PlayArrow, Lock } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxHeight: 500,
    overflow: "auto",
    marginTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
  },
  ListItemText: {
    color: "#fff",
  },
  Button: {
    background: "rgba(225, 7, 18, .87)",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: theme.palette.primary.light,
    },
  },
  Divider: {
    background: theme.palette.text.primary,
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
  Avatar:{
    backgroundColor: "#1f2328",
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  Icons:{
    color: theme.palette.text.primary,
    fontSize:"small"
  }
}));

function generate(element) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

export default function InteractiveList() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <div className={classes.root}>
      <List>
        <ListItem selected={selectedIndex === 0}>
          <ListItemAvatar>
            <Avatar className={classes.Avatar}>
              <PlayArrow className={classes.Icons}/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Class Trailer"
            className={classes.ListItemText}
          />
          <ListItemText secondary="1.56" className={classes.ListItemText} />
        </ListItem>
        <ListItem selected={selectedIndex === 1}>
          <ListItemAvatar>
            <Avatar className={classes.Avatar}>
              <PlayArrow className={classes.Icons}/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Class Sample"
            className={classes.ListItemText}
          />
          <ListItemText secondary="1.02" className={classes.ListItemText} />
        </ListItem>
        {generate(
          <ListItem selected={selectedIndex === 1}>
            <ListItemAvatar>
              <Avatar className={classes.Avatar}>
                <Lock className={classes.Icons}/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Lesson" className={classes.ListItemText} />
            <ListItemText secondary="10.56" className={classes.ListItemText} />
          </ListItem>
        )}
      </List>
    </div>
  );
}
