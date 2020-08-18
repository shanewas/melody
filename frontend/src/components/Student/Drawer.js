import React from "react";
import {
  List,
  makeStyles,
  Divider,
  Toolbar,
  ListItemText,
  ListItem,
  ListItemIcon,
  Drawer,
} from "@material-ui/core";
import {
  Mail,
  PostAdd,
  Inbox,
  PersonAdd,
  Group,
  Contacts,
  LocalActivity,
  Stars,
  EditOutlined,
  Dashboard,
} from "@material-ui/icons";
import ListIcon from "@material-ui/icons/List";
import theme from "../../theme";
import { withRouter } from "react-router-dom";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    background: theme.palette.primary.light,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
}));
const DrawerCustom = (props) => {
  const classes = useStyles();
  const { history } = props;
  const drawerItemList0 = [
    {
      text: "Dashboard",
      icon: <Dashboard />,
      onClick: () => history.push("/admin"),
    },
  ];
  const drawerItemList1 = [
    {
      text: "Add Course",
      icon: <PostAdd />,
      onClick: () => history.push("/courseupload", "Course Upload Panel"),
    },
    {
      text: "Edit Course",
      icon: <EditOutlined />,
      // onClick: () => history.push("/courseedit"),
    },
    {
      text: "Add Instructor",
      icon: <PersonAdd />,
      onClick: () =>
        history.push("/instructorupload", "Instructor Upload Panel"),
    },
    {
      text: "Edit Instructor",
      icon: <EditOutlined />,
      onClick: () => history.push("/instructoredit", "Instructor Edit Panel"),
    },
  ];
  const drawerItemList2 = [
    {
      text: "All Courses",
      icon: <ListIcon />,
      onClick: () => history.push("/admin/viewcourse", "All Courses"),
    },
    {
      text: "All Instructors",
      icon: <Group />,
      onClick: () => history.push("/admin/viewinstructor", "All Instructors"),
    },
    {
      text: "All Users",
      icon: <Contacts />,
      onClick: () => history.push("/"),
    },
  ];
  const drawerItemList3 = [
    {
      text: "Featured Courses",
      icon: <LocalActivity />,
      onClick: () => history.push("/admin/viewcourse", "Featured Courses"),
    },
    {
      text: "Featured Instructors",
      icon: <Stars />,
      onClick: () =>
        history.push("/admin/viewinstructor", "Featured Instructors"),
    },
  ];

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {drawerItemList0.map((item, index) => (
            <ListItem button key={item.text} onClick={item.onClick}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {drawerItemList1.map((item, index) => (
            <ListItem button key={item.text} onClick={item.onClick}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {drawerItemList2.map((item, index) => (
            <ListItem button key={item.text} onClick={item.onClick}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {drawerItemList3.map((item, index) => (
            <ListItem button key={item.text} onClick={item.onClick}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default withRouter(DrawerCustom);
