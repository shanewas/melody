import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Typography, Card } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import theme from "../../theme";
import axios from "../../api/Config";
import CourseView from "../CourseViewHome";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  Card: {},
  Tab: {
    padding: theme.spacing(1),

    backgroundColor: theme.palette.secondary.main,
    "&:active": {
      outline: "none",
    },
    "&:hover": {
      outline: "none",
    },
    '&focused': {
      outline: "none",
    },
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [user, setUser] = useState(null);

  const [userCourses, setUserCourses] = useState([]);
  useEffect(() => {
    getUserDetails();
    getUserCourses();
  }, [user, userCourses]);

  function getUserDetails() {
    const url = "user/" + localStorage.getItem("id");
    axios
      .get(url, {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        },
      })
      .then((res) => {
        console.log("User: " + JSON.stringify(res.data));
        setUser(res.data);
      });
  }

  function getUserCourses() {
    axios
      .post(
        "user/course/",
        {
          id: localStorage.getItem("id"),
        },
        {
          headers: {
            "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
          },
        }
      )
      .then((res) => {
        console.log("Course: " + JSON.stringify(res.data));
        setUserCourses(res.data);
      });
  }

  return (
    <div className={classes.root}>
      <Card className={classes.Card}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="scrollable auto tabs example"
          centered
          className={classes.Tab}
        >
          <Tab label="Classroom" {...a11yProps(0)} />
          <Tab label="Wishlist" {...a11yProps(1)} />
          <Tab label="Previous Courses" {...a11yProps(2)} />
          <Tab label="Messages" {...a11yProps(3)} />
          <Tab label="Profile" {...a11yProps(4)} />
        </Tabs>
      </Card>
      <TabPanel value={value} index={0}>
        <CourseView courses={userCourses} from="studentpanel" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
