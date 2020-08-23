import React, { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  CssBaseline,
  Toolbar,
  Paper,
  TextField,
  makeStyles,
  Button,
  MenuItem,
  InputAdornment,
} from "@material-ui/core";
import theme from "../../theme";
import { useForm } from "react-hook-form";
import Appbar from ".././Admin/Appbar";
import Drawer from ".././Admin/Drawer";
import axios from "../../api/Config";
const useStyles = makeStyles((theme) => ({
  Container: {
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
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  root: {
    display: "flex",
  },
}));
export default function CourseEdit(props) {
  const classes = useStyles();
  const [category, setCategory] = React.useState("");
  const [level, setLevel] = React.useState("");
  const [module, setModule] = React.useState("");
  const [instructor, setInstructor] = React.useState("");
  const [instructorList, setInstructorList] = useState([]);
  const [courseList, setCourseList] = useState([]);
  const [course, setCourse] = useState("");
  //check from where the component is called
  const state = props.location.state;
  const { register, handleSubmit, errors } = useForm();
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
      value: "1",
      label: "Level 1",
    },
    {
      value: "2",
      label: "Level 2",
    },
    {
      value: "3",
      label: "Level 3",
    },
    {
      value: "4",
      label: "Level 4",
    },
    {
      value: "5",
      label: "Level 5",
    },
  ];
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
  function getCourses() {
    axios
      .get("course/", {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        },
      })
      .then((res) => {
        setCourseList(res.data);
        console.log("course list fetched in CourseEdit: " + res.data[0].title);
      });
  }
  function addCourse(data, e) {
    console.log(data);

    var formData = new FormData();

    if (course !== "") {
      if (data.title !== "") {
        formData.append("title", data.title);
      }
      if (data.subtitle !== "") {
        formData.append("subtitle", data.subtitle);
      }
      if (instructor !== "") {
        formData.append("instructor", instructor);
      }
      if (data.requirements !== "") {
        formData.append("requirements", data.requirements);
      }
      if (data.thumbnail[0] !== "") {
        formData.append("thumbnail", data.thumbnail[0]);
      }
      if (category !== "") {
        formData.append("catagory", category);
      }
      if (level !== "") {
        formData.append("level", level);
      }
      if (module !== "") {
        formData.append("sublevel", module);
      }
      if (data.price !== "") {
        formData.append("price", data.price);
      }
      if (data.validity !== "") {
        formData.append("validity", data.validity);
      }
      if (data.coursehour !== "") {
        formData.append("courseHour", data.coursehour);
      }
      if (data.description !== "") {
        formData.append("desc", data.description);
      }
    }

    for (var pair of formData.entries()) console.log(pair[0] + ", " + pair[1]);

    // formData.append("video", videoIdArray);

    updateCourse(formData, e, course);
  }

  function updateCourse(data, e, courseId) {
    const url = "course/" + courseId;
    console.log("changed value to upload = " + data);

    console.log(url);
    axios
      .put(url, data, {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
          "Content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(JSON.stringify(res.data));
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };
  useEffect(() => {
    getCourses();
  }, []);

  return (
    <Grid
      container
      direction="column"
      style={{ background: theme.palette.background.default }}
    >
      <div className={classes.root}>
        <CssBaseline />
        <Appbar title={state} />
        <Drawer />
        <main className={classes.content}>
          <Toolbar />
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
              Update Course
            </Typography>
            <form
              noValidate
              className={classes.form}
              style={{
                marginLeft: theme.spacing(10),
                marginRight: theme.spacing(10),
              }}
              onSubmit={handleSubmit(addCourse)}
            >
              <Grid container direction="column" spacing={3}>
                <Grid item>
                  <TextField
                    select
                    label="Select Course"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      className: classes.input,
                    }}
                    className={classes.label}
                    value={course.title}
                    onChange={handleCourseChange}
                    className={classes.label}
                  >
                    {courseList.map((course) => (
                      <MenuItem
                        name="course"
                        key={course.title}
                        value={course._id}
                        inputRef={register({ required: true })}
                      >
                        {course.title}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item>
                  <TextField
                    name="title"
                    label="Title"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      className: classes.input,
                    }}
                    className={classes.label}
                    inputRef={register}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    name="subtitle"
                    label="Sub-Title"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      className: classes.input,
                    }}
                    className={classes.label}
                    inputRef={register}
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
                          name="instructor"
                          key={option.name}
                          value={option._id}
                          inputRef={register}
                        >
                          {option.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item lg={8}>
                    <TextField
                      name="requirements"
                      label="Requirements"
                      variant="outlined"
                      fullWidth
                      InputProps={{
                        className: classes.input,
                      }}
                      className={classes.label}
                      inputRef={register}
                    />
                  </Grid>
                </Grid>
                <Grid item lg={4}>
                  <TextField
                    name="thumbnail"
                    type="file"
                    variant="outlined"
                    helperText="Select image for course thumbnail"
                    InputProps={{
                      className: classes.input,
                    }}
                    className={classes.label}
                    inputRef={register}
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
                        <MenuItem key={option.value} value={option.value}>
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
                        <MenuItem key={option.value} value={option.value}>
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
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
                <Grid item container direction="row" spacing={3}>
                  <Grid item lg={4}>
                    <TextField
                      name="price"
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
                      inputRef={register}
                    />
                  </Grid>
                  <Grid item lg={4}>
                    <TextField
                      name="validity"
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
                      inputRef={register}
                    />
                  </Grid>
                  <Grid item lg={4}>
                    <TextField
                      name="coursehour"
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
                      inputRef={register}
                    />
                  </Grid>
                </Grid>
                <Grid item>
                  <TextField
                    name="description"
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
                    inputRef={register}
                  />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                type="submit"
                className={classes.Button}
                // onClick={handleSubmit}

                fullWidth
              >
                Upload Course
              </Button>
            </form>
          </Paper>
        </main>
      </div>
    </Grid>
  );
}
