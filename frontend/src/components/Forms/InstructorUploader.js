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
  Toolbar,
} from "@material-ui/core";
import theme from "../../theme";
import axios from "../../api/Config";
import { useForm } from "react-hook-form";
import Topnav from "../Navbar";
import Drawer from "../Admin/Drawer";
import Appbar from "../Admin/Appbar";
const useStyles = makeStyles((theme) => ({
  Container: {
    background: theme.palette.primary.light,
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
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  input: {
    color: theme.palette.text.secondary,
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
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function InstructorUploader(props) {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  //check from where the component is called
  const state = props.location.state;

  function addInstructor(data, e) {
    console.log(data);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("bio", data.bio);
    formData.append("photo", data.photo[0]);

    uploadInstructor(formData, e);
  }

  function uploadInstructor(data, e) {
    axios
      .post("instructor/add", data, {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
          "Content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(JSON.stringify(res));
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
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
              padding: theme.spacing(5, 0, 5, 5),
            }}
            align="left"
          >
            Add New Instructor
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit(addInstructor)}
          >
            <div style={{ padding: theme.spacing(0, 5, 5, 5) }}>
              <TextField
                name="name"
                type="text"
                variant="outlined"
                className={classes.label}
                label="Name"
                fullWidth
                InputProps={{
                  className: classes.input,
                }}
                inputRef={register({ required: true })}
              />
              {errors.name && (
                <p style={{ color: theme.palette.secondary.contrastText }}>
                  Name is required
                </p>
              )}
              <TextField
                name="bio"
                type="text"
                variant="outlined"
                className={classes.label}
                label="Bio"
                multiline
                rowsMax={3}
                rows={3}
                fullWidth
                InputProps={{
                  className: classes.input,
                }}
                inputRef={register({
                  required: true,
                })}
              />
              {errors.email && (
                <p style={{ color: theme.palette.secondary.contrastText }}>
                  Bio is invalid
                </p>
              )}
              <TextField
                name="photo"
                type="file"
                variant="outlined"
                className={classes.label}
                fullWidth
                helperText="Select instructor photo"
                InputProps={{
                  className: classes.input,
                }}
                inputRef={register({
                  required: true,
                })}
              />

              <Button
                type="submit"
                variant="contained"
                className={classes.Button}
                fullWidth
              >
                Upload Instructor
              </Button>
            </div>
          </form>
        </Paper>
      </main>
    </div>
  );
}
