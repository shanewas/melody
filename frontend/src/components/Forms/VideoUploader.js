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
  Divider,
  CircularProgress,
  LinearProgress,
} from "@material-ui/core";
import { CloudUpload, Remove, Add } from "@material-ui/icons";
import theme from "../../theme";
import axios from "../../api/Config";
import { useForm } from "react-hook-form";

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
}));

export default function VideoUploader(props) {
  const [videoList, setVideoList] = useState([
    {
      title: "",
      description: "",
      duration: "",
      eligibility: "",
      file: "",
      document: "",
    },
  ]);
  const [video, setVideo] = useState(null);
  const [eligibility, setEligibility] = useState("");
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();
  const eligibilityStatusList = ["Open", "Login", "Subscription"];

  function addVideo(data, event) {
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
        "video = " +
        data.video[0] +
        " " +
        "document = " +
        data.document[0]
    );
    uploadVideo(data);
  }

  const uploadVideo = (data) => {
    const formData = new FormData();

    formData.append("title",  data.title);
    formData.append("desc", data.description);
    formData.append("eligibility", eligibility);
    formData.append("duration", data.duration);
    formData.append("file", video);

    axios
      .post("video/add/", formData, {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
          "Content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        const response = res.data;

        console.log("response for video upload request: " + response.id);
      });
  };

  const uploadDocument = (data) => {
    axios
      .post("document/add/", data.document[0], {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
          "Content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        const response = res.data;
        console.log("response for document upload request: " + response.id);
        data.document = res.data;
      });
  };

  const handleEligibilityChange = (event) => {
    setEligibility(event.target.value);
  };

  const handleAddFields = () => {
    setVideoList([
      ...videoList,
      {
        title: "",
        description: "",
        duration: "",
        eligibility: "",
        file: "",
        document: "",
      },
    ]);
  };

  const handleRemoveFields = (index) => {
    console.log("remove index = " + index);
    const values = [...videoList];
    values.splice(index, 1);
    setVideoList(values);
  };

  return (
    <div>
      <form
        noValidate
        className={classes.form}
        onSubmit={handleSubmit(addVideo)}
      >
        {videoList.map((video, index) => (
          <div key={index}>
            <Typography className={classes.title} variant="h5">
              Lesson {index + 1}
            </Typography>
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
            <TextField
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
            />
            <div className="row" style={{ justifyContent: "center" }}>
              <div>
                <Fab
                  type="button"
                  size="small"
                  className={classes.Fab}
                  onClick={() => handleAddFields()}
                >
                  <Add style={{ color: theme.palette.primary.light }} />
                </Fab>
              </div>
              <div>
                <Fab
                  type="button"
                  size="small"
                  className={classes.Fab}
                  onClick={() => handleRemoveFields(index)}
                >
                  <Remove style={{ color: theme.palette.primary.light }} />
                </Fab>
              </div>
              <div>
                <Button className={classes.Button} type="submit">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
}
