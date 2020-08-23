import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  TextField,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

import theme from "../../theme";
import axios from "../../api/Config";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  Typography: {
    color: theme.palette.secondary.contrastText,
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
  Button: {
    color: theme.palette.primary.light,
    background: "#821518",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: theme.palette.primary.dark,
    },
  },

  Paper: {
    backgroundColor: theme.palette.primary.light,
    marginTop: theme.spacing(5),
    padding: theme.spacing(5),
  },
}));

export default function ContactUsForm(props) {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  function sendMessage(data, e) {
    console.log(data);
    axios
      .post(
        "contact/add/",
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        {
          headers: {
            "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        e.target.reset(); // reset after form submit
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <Container>
      <Typography
        className={classes.Typography}
        variant="h4"
        component="h4"
        align="center"
      >
        Contact Us
      </Typography>
      <Paper className={classes.Paper}>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(sendMessage)}
        >
          <div>
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
              name="email"
              type="email"
              variant="outlined"
              className={classes.label}
              label="Email"
              fullWidth
              InputProps={{
                className: classes.input,
              }}
              inputRef={register({
                required: true,
                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
            />
            {errors.email && (
              <p style={{ color: theme.palette.secondary.contrastText }}>
                Email is invalid
              </p>
            )}

            <TextField
              name="message"
              type="text"
              variant="outlined"
              className={classes.label}
              label="Message"
              fullWidth
              multiline
              rowsMax={10}
              rows={10}
              InputProps={{
                className: classes.input,
              }}
              inputRef={register({ required: true })}
            />
            {errors.message && (
              <p style={{ color: theme.palette.secondary.contrastText }}>
                Message is required
              </p>
            )}
            <Button
              type="submit"
              variant="contained"
              className={classes.Button}
              fullWidth
            >
              Send
            </Button>
          </div>
        </form>
      </Paper>
    </Container>
  );
}
