import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import axios from "../../api/Config";
import theme from "../../theme";
import { SaveOutlined } from "@material-ui/icons";

const ITEM_HEIGHT = 48;

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    padding: theme.spacing(1, 2),
  },
  list: {
    width: 400,
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
  root1: {
    flexGrow: 1,
    maxHeight: ITEM_HEIGHT * 7.5,
    overflow: "auto",
  },
}));

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a, b) {
  return [...a, ...not(b, a)];
}

export default function InstructorFeatureList() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([]);
  const [right, setRight] = React.useState([]);
  const [instructorList, setInstructorList] = useState([]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items) => intersection(checked, items).length;

  const handleToggleAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  useEffect(() => {
    getInstructors();
  }, []);

  //get all instructors list from server later it will be list of all featured instructors
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
          "instructor list fetched in feature list: " + instructorList.length
        );

        const tempRight = [];
        const tempLeft = [];
        for (var i = 0; i < instructorList.length; i++) {
          if (instructorList[i].featured === true) {
            console.log(instructorList[i].name);
            // setRight([...right, instructorList[i]]);
            tempRight.push(instructorList[i]);
          } else {
            tempLeft.push(instructorList[i]);
          }
        }
        if (tempRight !== []) {
          setRight(tempRight);
        }
        if (tempLeft !== []) {
          setLeft(tempLeft);
        }

        console.log("right array length = " + right.length);
      });
  }

  // uploadFeaturedInstructorList();
  //function to upload all featured instructos
  function uploadFeaturedInstructorList() {
    console.log("size of instructor featured list to upload = " + right.length);
    for (let i = 0; i < right.length; i++) {
      var temp = right[i].featured;
      right[i].featured = true;
      console.log(
        `previous value: ${temp} and current value: ${right[i].featured}`
      );
    }
    for (let j = 0; j < left.length; j++) {
      var temp = left[j].featured;
      left[j].featured = false;
      console.log(
        `previous value: ${temp} and current value: ${left[j].featured}`
      );
    }
    var tempArray = left.concat(right);
    for (var k = 0; k < tempArray.length; k++) {
      console.log(
        `finaly value for ${tempArray[k].name} featured = ${tempArray[k].featured}`
      );
      pushUpdate(tempArray[k]);
    }
  }

  function pushUpdate(item) {
    var url = "instructor/" + item._id;
    const data = new FormData();
    data.append("featured", item.featured);
    axios
      .put(url, data, {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
          "Content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("response in InstructorFeatureList = " + res.data);
      });
  }

  const customList = (title, items) => (
    <Card className={classes.root1}>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={
              numberOfChecked(items) === items.length && items.length !== 0
            }
            indeterminate={
              numberOfChecked(items) !== items.length &&
              numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{ "aria-label": "all items selected" }}
            style={{ color: theme.palette.primary.dark }}
            size="small"
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List className={classes.list} dense component="div" role="list">
        {items.map((value) => {
          const labelId = `transfer-list-all-item-${value}-label`;

          return (
            <ListItem
              key={value}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                  style={{ color: theme.palette.primary.dark }}
                  size="small"
                />
              </ListItemIcon>
              <ListItemIcon>
                <Avatar src={"http://162.0.231.67/" + value.photo} />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value.name} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );

  return (
    <Grid
      container
      spacing={2}
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item>{customList("Instructors", left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={uploadFeaturedInstructorList}
            aria-label="move selected left"
          >
            <SaveOutlined />
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList("Featured Instructors", right)}</Grid>
    </Grid>
  );
}
