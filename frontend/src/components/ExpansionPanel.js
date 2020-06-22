import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",   
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    background: "#191c21"
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
  Typography: {
    fontSize: theme.typography.pxToRem(16)
  },
  ExpandMoreIcon: {
    color: "rgba(255,255,255,.87)"
  },
  ExpansionPanel: {  
    padding: theme.spacing(15)
  }
}));

export default function SimpleExpansionPanel(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel square className={classes.root}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon className={classes.ExpandMoreIcon}/>}
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
