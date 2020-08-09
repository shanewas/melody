import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  TextField,
  makeStyles,
  Divider,
  Typography,
} from "@material-ui/core";

import axios from "../api/Config";

const useStyles = makeStyles((theme) => ({
  Typography: {
    marginTop: theme.spacing(5),
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
  Div: {
    marginTop: theme.spacing(5),
  },
}));

export default function ContactUsForm(props) {
  const classes = useStyles();
  return (
    <Container>
      <Typography className={classes.Typography} variant="h4" align="center">
        Contact Us
      </Typography>
      <form>
        <div className={classes.Div}>
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
          />
          <TextField
            name="email"
            type="text"
            variant="outlined"
            className={classes.label}
            label="Email"
            fullWidth
            InputProps={{
              className: classes.input,
            }}
          />
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
          />
          <Button variant="contained" className={classes.Button} fullWidth>
            Send
          </Button>
        </div>
      </form>
    </Container>
  );
}
