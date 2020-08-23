import React, { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  Button,
  Container,
  TextField,
  makeStyles,
  InputAdornment,
  Fab,
  MenuItem,
  Snackbar,
  CircularProgress,
  LinearProgress,
  Toolbar,
  Paper,
} from "@material-ui/core";
import { CloudUpload, Remove, Add } from "@material-ui/icons";
import theme from "../../theme";
import axios from "../../api/Config";
import { useForm } from "react-hook-form";
import Drawer from "../Admin/Drawer";
import Appbar from "../Admin/Appbar";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#821518",
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
    margin: theme.spacing(1, 0, 1, 0),
  },
  input: {
    color: theme.palette.text.secondary,
  },
  Fab: {
    "&:focus": {
      outline: "none",
    },
    "&:active": {
      outline: "none",
    },
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: theme.palette.primary.dark,
    },
    margin: theme.spacing(1, 0, 0, 2),
    backgroundColor: theme.palette.secondary.contrastText,
  },
  Button: {
    color: theme.palette.primary.light,

    background: "#821518",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: theme.palette.primary.dark,
    },

    marginTop: theme.spacing(5),
  },
  Divider: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  Container: {
    background: theme.palette.primary.light,
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function VideoUploader(props) {
  const [video, setVideo] = useState(null);
  const [eligibility, setEligibility] = useState("");
  const [course, setCourse] = useState("");
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();
  const eligibilityStatusList = ["Open", "Login", "Subscription"];

  const [uploading, setUploading] = useState(false);
  const [open, setOpen] = React.useState(props.open);
  const [courseList, setCourseList] = useState([]);
  //check from where the component is called
  const state = props.location.state;

  function addVideo(data, event) {
    setUploading(true);
    console.log(
      "form data in videoUploader = " +
        "title = " +
        " " +
        data.title +
        " " +
        "description = " +
        data.description +
        " " +
        "duration = " +
        data.duration +
        " " +
        "eligibility = " +
        eligibility +
        " " +
        "file = " +
        data.video[0] +
        " "
      // +
      // "document = " +
      // data.document[0]
    );
    console.log("course id selected in videoUploader = " + course);
    // uploadDocument(data.document[0]);
    uploadVideo(data, event);
  }

  const uploadVideo = (data, event) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("desc", data.description);

    formData.append("duration", data.duration);
    formData.append("eligibility", eligibility);
    formData.append("file", data.video[0]);

    axios
      .post("video/add/", formData, {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
          "Content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        const response = res.data;
        event.target.reset();
        console.log("response for video upload request: " + response.id);
        // props.videoIdCallback(response.id);
        setUploading(false);
        setOpen(true);
        setVideoToCourse(course, response.id);
      });
  };

  const uploadDocument = (data) => {
    const formData = new FormData();
    formData.append("file", data);

    axios
      .post("document/add/", formData, {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
          "Content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        const response = res.data;
        console.log("response for document upload request: " + response.id);
      });
  };

  const handleEligibilityChange = (event) => {
    setEligibility(event.target.value);
  };

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
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
        console.log(
          "course list fetched in videoUploader: " + res.data[0].title
        );
      });
  }

  useEffect(() => {
    getCourses();
  }, []);

  function setVideoToCourse(courseId, videoId) {
    axios
      .post(
        "course/addVideo",
        {
          course: courseId, // This is the body part
          video: videoId,
        },
        {
          headers: {
            "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
          },
        }
      )
      .then((res) => {
        console.log("response for video uploaded to course = " + res.data);
      });
  }

  return (
    <div className={classes.root}>
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
            Add New Video
          </Typography>
          <form
            noValidate
            className={classes.form}
            onSubmit={handleSubmit(addVideo)}
            style={{
              marginLeft: theme.spacing(10),
              marginRight: theme.spacing(10),
            }}
          >
            <div>
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
              <TextField
                name="title"
                type="text"
                label="Title"
                variant="outlined"
                fullWidth
                InputProps={{
                  className: classes.input,
                }}
                className={classes.label}
                inputRef={register({ required: true })}
              />
              <TextField
                name="description"
                type="text"
                label="Description"
                variant="outlined"
                fullWidth
                InputProps={{
                  className: classes.input,
                }}
                className={classes.label}
                inputRef={register({ required: true })}
                multiline
                rowsMax={3}
                rows={3}
              />
              <TextField
                name="duration"
                type="text"
                label="Duration"
                variant="outlined"
                fullWidth
                InputProps={{
                  className: classes.input,
                  endAdornment: (
                    <InputAdornment position="end">Mins</InputAdornment>
                  ),
                }}
                className={classes.label}
                inputRef={register({ required: true })}
              />
              <TextField
                select
                label="Eligibility"
                variant="outlined"
                fullWidth
                InputProps={{
                  className: classes.input,
                }}
                className={classes.label}
                value={eligibility}
                onChange={handleEligibilityChange}
                className={classes.label}
              >
                {eligibilityStatusList.map((eligibilityStatus) => (
                  <MenuItem
                    name="eligibility"
                    key={eligibilityStatus}
                    value={eligibilityStatus}
                    inputRef={register({ required: true })}
                  >
                    {eligibilityStatus}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                name="video"
                type="file"
                variant="outlined"
                fullWidth
                helperText="Select video for lesson"
                InputProps={{
                  className: classes.input,
                }}
                className={classes.label}
                inputRef={register({ required: true })}
              />
              {/* <TextField
            name="document"
            type="file"
            variant="outlined"
            fullWidth
            helperText="Select document for lesson"
            InputProps={{
              className: classes.input,
            }}
            className={classes.label}
            inputRef={register({ required: true })}
          /> */}
              <Button
                variant="contained"
                type="submit"
                className={classes.Button}
                // onClick={handleSubmit}

                fullWidth
              >
                Upload Lesson
              </Button>
              {uploading === true && (
                <Grid container justify="center">
                  {" "}
                  <CircularProgress
                    color={theme.palette.secondary.contrastText}
                    style={{
                      marginTop: theme.spacing(2),
                      marginBottom: theme.spacing(2),
                    }}
                  />
                </Grid>
              )}
            </div>
          </form>
          <Snackbar
            open={false}
            autoHideDuration={6000}
            style={{
              marginLeft: theme.spacing(10),
              marginRight: theme.spacing(10),
            }}
            onClose={handleClose}
          >
            <Alert severity="success" onClose={handleClose}>
              Video Uploaded Successfully!
            </Alert>
          </Snackbar>
        </Paper>
      </main>
    </div>
  );
}
