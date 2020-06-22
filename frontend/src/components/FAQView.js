import ExpansionPanel from "./ExpansionPanel";
import { Grid, Typography, Paper } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Typography: {
    marginTop: theme.spacing(2),
  },
  Title: {
    fontSize: 24,
  },
}));

export default function FAQView() {
  const classes = useStyles();
  return (
    <Paper>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item>
          <Typography variant="H1" component="H1" className={classes.Title}>
            Frequently asked questions
          </Typography>
        </Grid>

        <Grid item>
          <Typography className={classes.Typography}>
            General
          </Typography>
        </Grid>

        <Grid item lg={6} md={6} sm={6} xs={12}>
          <ExpansionPanel
            question="What is MethodMelody?"
            answer="MethodMelody is a learning platform that makes it possible for anyone to watch or listen to hundreds of video lessons on Music and Musical Instruments taught by 10+ of the Bangladesh's best Instructors. 
            
            
            MethodMelody delivers a world class online learning experience. Video lessons are available anytime, anywhere on your smartphone, personal computer, Apple TV and FireTV streaming media players."
          />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <ExpansionPanel
            question="Do I have to be a Member in order to access the course?"
            answer="MethodMelody has a Course-based Subscription facility. While you can access any five of our courses for a trial period of seven days free of cost. Yet you need to pay your course's subscription fee in order to continue with the course after the trial period ends."
          />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <ExpansionPanel
            question="Where can I watch?"
            answer="With MethodMelody, you can learn and be inspired anytime, anywhere, including your smartphone, personal computer, Apple TV, Amazon Fire TV, and Roku streaming media players. You can even download your favorite lessons and watch on the plane or listen during your commute in audio-only mode."
          />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <ExpansionPanel
            question="Which classes are right for me?"
            answer="MethodMelody offers 80+ classes across a variety of musical instrument categories, including guitar and bass, drums, keyboard and piano, flute, violin, cello, and more. 
            
            Every class has been designed to be accessible for people with little to no experience and advanced students alike. With new classes launching regulary, you can learn practical skills, ignite new passions, and get everyday wisdom.


            Check out our catalog and watch a few class trailers!"
          />
        </Grid>
        <Grid>
          <Typography variant="P" component="P" className={classes.Typography}>
            Pricing & Payment
          </Typography>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <ExpansionPanel
            question="How much does MethodMelody cost?"
            answer="The annual membership is $180 and provides unlimited access to all classes and new classes as they launch. 

            Also you can enroll to different courses without getting a membership through our course-based subscription model.
            
MethodMelody memberships include access to our mobile and TV apps, high-definition videos, and downloadable class workbooks."
          />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <ExpansionPanel
            question="How does the 30-day guarantee work?"
            answer="Our goal is to make sure that you have the best learning experience possible. If MethodMelody isn’t for you, then email us within 30 days of the date you purchase your subscription, and we’ll offer a full refund"
          />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <ExpansionPanel
            question="How do I cancel?"
            answer="If you don’t want to continue, you can cancel your membership renewal through your account page. Follow the prompts to cancel on the Settings page, and your membership will not renew. Please note that there aren’t refunds for partially unused membership periods."
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
