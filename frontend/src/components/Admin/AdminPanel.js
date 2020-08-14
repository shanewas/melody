import React, { useEffect, useState } from "react";

import {
  Typography,
  Paper,
  makeStyles,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Divider,
  ListItem,
  List,
  Grid,
  Button,
  useTheme,
  Toolbar,
  CssBaseline,
} from "@material-ui/core";
import {
  ShoppingBasketOutlined,
  Person,
  PersonOutline,
  LocalLibrary,
  LocalLibraryOutlined,
} from "@material-ui/icons";
import theme from "../../theme";
import axios from "../../api/Config";

import { useHistory } from "react-router-dom";

import Drawer from "./Drawer";
import Appbar from "./Appbar";
import ListIcon from "@material-ui/icons/List";

const ITEM_HEIGHT = 48;

const useStyles = makeStyles((theme) => ({
  Paper: {
    margin: theme.spacing(5),

    padding: theme.spacing(5),
  },
  Paper1: {
    margin: theme.spacing(5),

    padding: theme.spacing(5),
  },

  Button: {
    color: theme.palette.primary.light,
    background: "#821518",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: theme.palette.primary.dark,
    },
  },
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  Icon: {
    color: theme.palette.secondary.contrastText,
    fontSize: 30,
  },
  TitleText: {
    color: theme.palette.text,
  },
  ValueText: {
    color: theme.palette.secondary.contrastText,
  },
}));

export default function AdminPanel() {
  const classes = useStyles();
  const [messageList, setMessageList] = useState([]);
  const theme = useTheme();

  function getMessages() {
    axios
      .get("contact/getall", {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
          "Content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(
          "number of messages fetched: " + JSON.stringify(res.data.length)
        );
        setMessageList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getMessages();

  const history = useHistory();
  function navigateToCourseUploader() {
    history.push("/courseupload");
  }

  function navigateToInstructorUploader() {
    history.push("/instructorupload");
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Appbar />
      <Drawer />
      <main className={classes.content}>
        <Toolbar />
        <Grid
          container
          direction="row"
          style={{ backgroundColor: theme.palette.primary.main }}
        >
          <Grid
            item
            container
            direction="row"
            xs={12}
            style={{ marginLeft: theme.spacing(3) }}
          >
            <Grid item xs={2}>
              <Paper
                style={{
                  marginLeft: theme.spacing(2),
                  padding: theme.spacing(2, 1, 2, 1),
                }}
              >
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <ShoppingBasketOutlined className={classes.Icon} />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" className={classes.TitleText}>
                      Purchased Courses
                    </Typography>
                  </Grid>
                  <Grid item>
                    {" "}
                    <Typography variant="h5" className={classes.ValueText}>
                      14
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper
                style={{
                  marginLeft: theme.spacing(2),
                  padding: theme.spacing(2, 1, 2, 1),
                }}
              >
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <LocalLibraryOutlined className={classes.Icon} />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" className={classes.TitleText}>
                      Number of Students
                    </Typography>
                  </Grid>
                  <Grid item>
                    {" "}
                    <Typography variant="h5" className={classes.ValueText}>
                      221
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper
                style={{
                  marginLeft: theme.spacing(2),
                  padding: theme.spacing(2, 1, 2, 1),
                }}
              >
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <ListIcon className={classes.Icon} />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" className={classes.TitleText}>
                      Total Courses
                    </Typography>
                  </Grid>
                  <Grid item>
                    {" "}
                    <Typography variant="h5" className={classes.ValueText}>
                      45
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper
                style={{
                  marginLeft: theme.spacing(5),
                  padding: theme.spacing(2, 1, 2, 1),
                }}
              >
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <PersonOutline className={classes.Icon} />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" className={classes.TitleText}>
                      Total Instructors
                    </Typography>
                  </Grid>
                  <Grid item>
                    {" "}
                    <Typography variant="h5" className={classes.ValueText}>
                      5
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.Paper}>
              <Typography variant="h5">Messages</Typography>

              {messageList.map((message) => (
                <List>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar
                        alt={message.name}
                        src="/static/images/avatar/1.jpg"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={message.name}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            {message.email}
                          </Typography>
                          <br />
                          {` - ${message.message}`}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </List>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
