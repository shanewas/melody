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
} from "@material-ui/core";
import { CloudUpload, Remove, Add } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(1),
    color: "#821518",
  },
  div: {
    marginTop: theme.spacing(5),
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
    margin: theme.spacing(1),
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
    margin: theme.spacing(1),
  },
  Button: {
    color: theme.palette.primary.light,

    background: "#821518",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: theme.palette.primary.dark,
    },
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(5),
  },
}));

export default function VideoUploader() {
  const classes = useStyles();
  const [inputFields, setInputField] = useState([
    { title: "", description: "" },
  ]);

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputField(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields: ", inputFields);
  };

  const handleAddFields = () => {
    setInputField([...inputFields, { title: "", description: "" }]);
  };

  const handleRemoveFields = (index) => {
      const values = [...inputFields];
      values.splice(index,1);
      setInputField(values);
  };

  return (
    <Container>
      <Typography className={classes.title} variant="h5">
        Add New Video
      </Typography>
      <form onSubmit={handleSubmit}>
        {inputFields.map((inputField, index) => (
          <div key={index} className={classes.div}>
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
              className={classes.label}
              label="Description"
              fullWidth
              InputProps={{
                className: classes.input,
              }}
              value={inputField.description}
              onChange={(event) => handleChangeInput(index, event)}
            />
            <div class="d-flex flex-row">
              <TextField
                type="file"
                variant="outlined"
                className={classes.label}
                helperText="Select video for lesson"
              />
              <TextField
                type="file"
                variant="outlined"
                className={classes.label}
                helperText="Select document for lesson"
              />
              <TextField
                type="text"
                variant="outlined"
                className={classes.label}
                label="Duration"
                InputProps={{
                  className: classes.input,
                  endAdornment: (
                    <InputAdornment position="end">Hrs</InputAdornment>
                  ),
                }}
              />
            </div>
            <Fab
              type="button"
              size="small"
              className={classes.Fab}
              onClick={() => handleAddFields()}
            >
              <Add />
            </Fab>
            <Fab
              type="button"
              size="small"
              className={classes.Fab}
              onClick={() => handleRemoveFields(index)}
            >
              <Remove />
            </Fab>
            <Fab
              type="button"
              size="small"
              className={classes.Fab}
              // onClick={() => handleAdd()}
            >
              <CloudUpload />
            </Fab>
          </div>
        ))}
        <Button
          variant="contained"
          type="submit"
          className={classes.Button}
          onClick={handleSubmit}
        >
          Upload Course
        </Button>
      </form>
    </Container>
  );
}
