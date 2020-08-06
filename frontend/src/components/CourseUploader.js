import React, { useEffect, useState } from "react";
import {
  makeStyles,
  TextField,
  Grid,
  Paper,
  MenuItem,
  InputAdornment,
  TextareaAutosize,
  Button,
  Fab,
  Typography,
  Divider,
} from "@material-ui/core";
import { CloudUpload, Delete, Add } from "@material-ui/icons";
import theme from "../theme";
import axios from "../api/Config";
import Topnav from "./Navbar";
import VideoUploader from "./VideoUploader";

const useStyles = makeStyles((theme) => ({
  Container: {
    margin: theme.spacing(15),
    background: theme.palette.primary.light,
  },
  Divider: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  input: {
    color: theme.palette.text.secondary,
  },
  label: {
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.dark,
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.dark,
    },
    "& label.Mui-focused": {
      color: theme.palette.primary.dark,
    },
  },
  Fab: {
    "&:focus": {
      outline: "none",
    },
    "&:active": {
      outline: "none",
    },
  },
  Button: {
    color: theme.palette.primary.light,

    background: "#821518",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: theme.palette.primary.dark,
    },

    marginTop: theme.spacing(5),
    padding: theme.spacing(2),
  },
}));

const categories = [
  {
    value: "Guitar",
    label: "Guitar",
  },
  {
    value: "Acoustic Fingerstyle Guitar",
    label: "Acoustic Fingerstyle Guitar",
  },
  {
    value: "Drums",
    label: "Drums",
  },
  {
    value: "Piano/Keyboard",
    label: "Piano/Keyboard",
  },
  {
    value: "Sound Engineering",
    label: "Sound Engineering",
  },
];

const levels = [
  {
    value: "Basic",
    label: "Basic",
  },
  {
    value: "Intermediate",
    label: "Intermediate",
  },
  {
    value: "Advance",
    label: "Advance",
  },
  {
    value: "Pro",
    label: "Pro",
  },
  {
    value: "Mastro",
    label: "Mastro",
  },
];

const modules = [
  {
    value: "Level 1",
    label: "Level 1",
  },
  {
    value: "Level 2",
    label: "Level 2",
  },
  {
    value: "Level 3",
    label: "Level 3",
  },
  {
    value: "Level 4",
    label: "Level 4",
  },
  {
    value: "Level 5",
    label: "Level 5",
  },
];

export default function CourseUploader() {
  const classes = useStyles();

  const [category, setCategory] = React.useState("");
  const [level, setLevel] = React.useState("");
  const [module, setModule] = React.useState("");
  const [instructor, setInstructor] = React.useState("");

  const [instructorList, setInstructorList] = useState([]);
  const [thumbnail, setThumbnail] = useState(null);

  //for video
  const [fields, setFields] = useState([{ value: null }]);

  //array of all uploaded video ids
  let videoIdArray = [];

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };
  const handleModuleChange = (event) => {
    setModule(event.target.value);
  };
  const handleInstructorChange = (event) => {
    setInstructor(event.target.value);
  };

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
          "instructor list fetched in courseuploader: " + instructorList
        );
      });
  }

  //get file selected for thumbnail
  function fileSelectedHandler(event) {
    console.log("file selected: " + event.target.files[0]);
    setThumbnail(event.target.files[0]);
  }

  //callback function send to VideoUploader to upload videoIdArray
  const setVideoId = (videoId) => {
    videoIdArray.push(videoId);
    console.log("stored response for video upload request: " + videoIdArray[0]);
    console.log("number of videos uploaded: " + videoIdArray.length);
  };

  return (
    <Grid
      container
      direction="column"
      style={{ background: theme.palette.background.default }}
    >
      <div>
        <Topnav />
        <Paper className={classes.Container}>
          <Typography
            variant="h5"
            style={{
              color: theme.palette.secondary.contrastText,
              padding: theme.spacing(5, 0, 5, 0),
              marginLeft: theme.spacing(10),
            }}
            align="left"
          >
            Add New Course
          </Typography>
          <form
            noValidate
            autoComplete="off"
            style={{
              marginLeft: theme.spacing(10),
              marginRight: theme.spacing(10),
            }}
          >
            <Grid container direction="column" spacing={3}>
              <Grid item>
                <TextField
                  id="text_title"
                  label="Title"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    className: classes.input,
                  }}
                  className={classes.label}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="text_sub_title"
                  label="Sub-Title"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    className: classes.input,
                  }}
                  className={classes.label}
                />
              </Grid>
              <Grid item container direction="row" spacing={3}>
                <Grid item lg={4} md={4} sm={4}>
                  <TextField
                    id="text_instructor"
                    select
                    label="Instructor"
                    value={instructor}
                    onChange={handleInstructorChange}
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      className: classes.input,
                    }}
                    className={classes.label}
                  >
                    {instructorList.map((option) => (
                      <MenuItem
                        key={option.name}
                        value={option.name}
                        style={{ color: theme.palette.primary.light }}
                      >
                        {option.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item lg={8}>
                  <TextField
                    id="text_requirements"
                    label="Requirements"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      className: classes.input,
                    }}
                    className={classes.label}
                  />
                </Grid>
              </Grid>
              <Grid item lg={4}>
                <TextField
                  id="text_thumbnail"
                  type="file"
                  variant="outlined"
                  helperText="Select image for course thumbnail"
                  InputProps={{
                    className: classes.input,
                  }}
                  className={classes.label}
                  onChange={fileSelectedHandler}
                />
              </Grid>
              <Grid item container direction="row" spacing={3}>
                <Grid item lg={4} md={4} sm={4}>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Category"
                    value={category}
                    onChange={handleCategoryChange}
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      className: classes.input,
                    }}
                    className={classes.label}
                  >
                    {categories.map((option) => (
                      <MenuItem
                        key={option.value}
                        value={option.value}
                        style={{ color: theme.palette.primary.light }}
                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item lg={4} md={4} sm={4}>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Level"
                    value={level}
                    onChange={handleLevelChange}
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      className: classes.input,
                    }}
                    className={classes.label}
                  >
                    {levels.map((option) => (
                      <MenuItem
                        key={option.value}
                        value={option.value}
                        style={{ color: theme.palette.primary.light }}
                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item lg={4} md={4} sm={4}>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Module"
                    value={module}
                    onChange={handleModuleChange}
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      className: classes.input,
                    }}
                    className={classes.label}
                  >
                    {modules.map((option) => (
                      <MenuItem
                        key={option.value}
                        value={option.value}
                        style={{ color: theme.palette.primary.light }}
                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
              <Grid item container direction="row" spacing={3}>
                <Grid item lg={4}>
                  <TextField
                    id="text_price"
                    label="Price"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      className: classes.input,
                      endAdornment: (
                        <InputAdornment position="end">Tk</InputAdornment>
                      ),
                    }}
                    className={classes.label}
                  />
                </Grid>
                <Grid item lg={4}>
                  <TextField
                    id="text_validity"
                    label="Validity"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      className: classes.input,
                      endAdornment: (
                        <InputAdornment position="end">Days</InputAdornment>
                      ),
                    }}
                    className={classes.label}
                  />
                </Grid>
                <Grid item lg={4}>
                  <TextField
                    id="text_course_hour"
                    label="Course Duration"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      className: classes.input,
                      endAdornment: (
                        <InputAdornment position="end">Hrs</InputAdornment>
                      ),
                    }}
                    className={classes.label}
                  />
                </Grid>
              </Grid>
              <Grid item>
                <TextField
                  id="text_desc"
                  label="Description"
                  multiline
                  rowsMax={3}
                  //   value={value}
                  //   onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    className: classes.input,
                  }}
                  className={classes.label}
                />
              </Grid>
              {/* <Grid item lg={12}>
                <Divider className={classes.Divider} />
              </Grid> */}
              <Grid item container direction="column">
                <Grid item>
                  <Typography
                    variant="h5"
                    align="left"
                    style={{
                      color: theme.palette.secondary.contrastText,
                      padding: theme.spacing(5, 0, 5, 0),
                    }}
                  >
                    Add New Lessons
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                {/* sending callback function for storing videoId */}
                <VideoUploader videoIdCallback={setVideoId} />
              </Grid>
            </Grid>
          </form>
          <Button
            variant="contained"
            type="submit"
            className={classes.Button}
            // onClick={handleSubmit}

            fullWidth
          >
            Upload Course
          </Button>
        </Paper>
      </div>
    </Grid>
  );
}
