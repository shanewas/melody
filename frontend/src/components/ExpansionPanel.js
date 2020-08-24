import React from "react";
import { makeStyles, withStyles } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import theme from "../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    background: "#191c21",
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
  Typography: {
    fontSize: theme.typography.pxToRem(16),
  },
  ExpandMoreIcon: {
    color: "rgba(255,255,255,.87)",
  },
  ExpansionPanel: {
    padding: theme.spacing(15),
  },
}));

const ExpansionPanel = withStyles({
  root: {
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  },
  expanded: {
    margin: "auto",
  },
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: theme.palette.primary.light,
    borderBottom: "1px solid rgba(0,0,0,.125)",
    marginBottom: -1,
    minHeight: 56,

    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})((props) => <MuiExpansionPanelSummary {...props} />);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.primary.light,
  },
}))(MuiExpansionPanelDetails);

ExpansionPanelSummary.muiName = "ExpansionPanelSummary";

export default function SimpleExpansionPanel(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel square className={classes.root}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon className={classes.ExpandMoreIcon} style={{color:theme.palette.secondary.contrastText}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{props.question}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography align="left" className={classes.Typography}>
            {props.answer}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
