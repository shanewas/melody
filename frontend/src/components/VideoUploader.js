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
import theme from "../theme";
import axios from "../api/Config";

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
  const classes = useStyles();

  const [inputFields, setInputField] = useState([
    { title: "", description: "", duration: "", eligibility: "" },
  ]);
  const eligibilityStatusList = ["Open", "Login", "Subscription"];
  const [video, setVideo] = useState(null);

  //array of all uploaded document ids
  let documentIdArray = [];

  let videoFormData, documentFormData;

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputField(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields: ", inputFields);

    const formData = new FormData();

    formData.append("title", inputFields[0].title);
    formData.append("desc", inputFields[0].description);
    formData.append("eligibility", inputFields[0].eligibility);
    formData.append("duration", inputFields[0].duration);
    formData.append("file", video);
    // formData.append("document", document);
    videoFormData = formData;

    // uploadDocument(documentFormData);
    uploadVideo(videoFormData);
  };

  const handleDocumentSubmit = (doc) => {
    console.log("name of the document file: " + doc.name);

    let size = (doc.size / (1024 * 1024)).toFixed(3);
    console.log("size of the document file: " + size);

    const formData = new FormData();
    formData.append("file", doc);
    formData.append("desc", doc.name);
    formData.append("size", size);

    documentFormData = formData;
  };

  const uploadVideo = (data) => {
    axios
      .post("video/add/", data, {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
          "Content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        const response = res.data;

        console.log("response for video upload request: " + response.id);

        //sending uploaded video id to parent
        getVideoId(response.id);
      });
  };

  const uploadDocument = (data) => {
    axios
      .post("document/add/", data, {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
          "Content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        const response = res.data;
        console.log("response for document upload request: " + response.id);
        documentIdArray.push(response.id);

        console.log("document id in video upload: " + documentIdArray[0]);
        videoFormData.append("document", documentIdArray[0]);

        uploadVideo(videoFormData);
      });
  };

  const handleAddFields = () => {
    setInputField([
      ...inputFields,
      { title: "", description: "", duration: "" },
    ]);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputField(values);
  };

  //get video selected
  function videoSelectedHandler(event) {
    console.log("video selected: " + event.target.files[0]);
    setVideo(event.target.files[0]);
  }

  //get document selected
  function documentSelectedHandler(event) {
    console.log("document selected: " + event.target.files[0]);

    handleDocumentSubmit(event.target.files[0]);
  }

  const getVideoId = (videoId) => {
    props.videoIdCallback(videoId);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        {inputFields.map((inputField, index) => (
          <div key={index}>
            <Typography className={classes.title} variant="h5">
              Lesson {index + 1}
            </Typography>
            <TextField
              name="title"
              type="text"
              variant="outlined"
              className={classes.label}
              label="Title"
              fullWidth
              InputProps={{
                className: classes.input,
              }}
              value={inputField.title}
              onChange={(event) => handleChangeInput(index, event)}
            />
            <TextField
              name="description"
              type="text"
              variant="outlined"
              multiline
              rowsMax={3}
              className={classes.label}
              label="Description"
              fullWidth
              InputProps={{
                className: classes.input,
              }}
              value={inputField.description}
              onChange={(event) => handleChangeInput(index, event)}
            />

            <div className="row">
              <div className="col">
                <TextField
                  name="duration"
                  type="text"
                  variant="outlined"
                  className={classes.label}
                  label="Duration"
                  fullWidth
                  InputProps={{
                    className: classes.input,
                    endAdornment: (
                      <InputAdornment position="end">Mins</InputAdornment>
                    ),
                  }}
                  value={inputField.duration}
                  onChange={(event) => handleChangeInput(index, event)}
                />
              </div>
              <div className="col">
                <TextField
                  name="eligibility"
                  select
                  variant="outlined"
                  label="Eligibility"
                  className={classes.label}
                  fullWidth
                  InputProps={{
                    className: classes.input,
                  }}
                  value={inputField.eligibility}
                  onChange={(event) => handleChangeInput(index, event)}
                >
                  {eligibilityStatusList.map((eligibilityStatus) => (
                    <MenuItem key={eligibilityStatus} value={eligibilityStatus}>
                      {eligibilityStatus}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <TextField
                  type="file"
                  variant="outlined"
                  className={classes.label}
                  InputProps={{
                    className: classes.input,
                  }}
                  helperText="Select video for lesson"
                  fullWidth
                  onChange={videoSelectedHandler}
                />
              </div>
              <div className="col">
                <TextField
                  type="file"
                  variant="outlined"
                  className={classes.label}
                  InputProps={{
                    className: classes.input,
                  }}
                  helperText="Select document for lesson"
                  fullWidth
                  onChange={documentSelectedHandler}
                />
              </div>
            </div>
            <Grid container direction="row" justify="flex-end">
              <Grid item>
                {" "}
                <Fab
                  type="button"
                  size="small"
                  className={classes.Fab}
                  onClick={() => handleAddFields()}
                >
                  <Add style={{ color: theme.palette.primary.light }} />
                </Fab>
              </Grid>
              <Grid item>
                {" "}
                <Fab
                  type="button"
                  size="small"
                  className={classes.Fab}
                  onClick={() => handleRemoveFields(index)}
                >
                  <Remove style={{ color: theme.palette.primary.light }} />
                </Fab>
              </Grid>
              <Grid item>
                {" "}
                <Fab
                  type="button"
                  size="small"
                  className={classes.Fab}

                  // onClick={() => handleAdd()}
                >
                  <CloudUpload style={{ color: theme.palette.primary.light }} />
                </Fab>
              </Grid>
            </Grid>
            {/* <LinearProgress
              style={{ background: theme.palette.secondary.contrastText }}
            /> */}
            <Divider className={classes.Divider} />
          </div>
        ))}

        {/* <Button
          variant="contained"
          type="submit"
          className={classes.Button}
          onClick={handleSubmit}
        >
          Upload Videos
        </Button> */}
      </form>
    </Container>
  );
}
