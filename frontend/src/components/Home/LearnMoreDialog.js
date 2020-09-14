import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import {
  Typography,
  Box,
  Card,
  CardMedia,
  Fab,
  Grid,
  makeStyles,
} from "@material-ui/core";
import theme from "../../theme";
import { Search, ShoppingCart } from "@material-ui/icons";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const useStyles = makeStyles((theme) => ({
  Button1: {
    textTransform: "none",
    "&:focus": {
      outline: "none",
    },
  },
}));

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  const course = props.courseToView;

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const buy = () => {
    props.buyfunction(course._id);
    setOpen(false);
  };

  return (
    <div>
      <Grid
        container
        direction="row"
        spacing={1}
        style={{
          marginBottom: theme.spacing(1),
          marginRight: theme.spacing(1),
        }}
      >
        <Grid item>
          <Fab
            onClick={handleClickOpen}
            size="small"
            style={{ backgroundColor: theme.palette.secondary.main }}
          >
            <Search style={{ color: theme.palette.primary.contrastText }} />
          </Fab>
        </Grid>
        <Grid item>
          {" "}
          <Fab
            onClick={() => {
              // props.buyfunction(course._id);
            }}
            size="small"
            style={{ backgroundColor: theme.palette.secondary.main }}
          >
            <ShoppingCart
              style={{ color: theme.palette.primary.contrastText }}
            />
          </Fab>
        </Grid>
      </Grid>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        disableBackdropClick="true"
        disableEscapeKeyDown="true"
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {course.title}
        </DialogTitle>

        <DialogContent dividers>
          <Grid container direction="row" justify="center" spacing={2}>
            <Grid item xs={4} container direction="column">
              <Grid item>
                <img
                  src={"http://162.0.231.67/" + course.thumbnail}
                  width="100%"
                />
              </Grid>
              <Grid item style={{ marginTop: theme.spacing(1) }}>
                <Typography gutterBottom>
                  <Box fontWeight="fontWeightMedium">Category</Box>
                  {course.catagory}
                </Typography>
              </Grid>
              <Grid item>
                <Grid item>
                  <Typography
                    gutterBottom
                    style={{ marginTop: theme.spacing(1) }}
                  >
                    <Box fontWeight="fontWeightMedium">Level</Box>
                    {course.level}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    gutterBottom
                    style={{ marginTop: theme.spacing(1) }}
                  >
                    <Box fontWeight="fontWeightMedium">Module</Box>
                    {course.sublevel}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={8}>
              <Grid item>
                <Typography gutterBottom>
                  <Box fontWeight="fontWeightMedium" fontStyle="italic">
                    {course.subtitle}
                  </Box>
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom>{course.desc}</Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom></Typography>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={buy}
            size="small"
            style={{
              color: theme.palette.primary.light,
              backgroundColor: theme.palette.secondary.contrastText,
              padding: theme.spacing(1),
            }}
            className={classes.Button1}
          >
            Buy
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
