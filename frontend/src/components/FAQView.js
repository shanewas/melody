import ExpansionPanel from "./ExpansionPanel";
import { Grid, Typography, Paper } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Typography: {
    marginTop: theme.spacing(5),
    color: theme.palette.secondary.contrastText,
  },
}));

export default function FAQView() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignContent="center"
      className={classes.root}
    >
      <Grid item>
        <Typography variant="h4" component="h4" className={classes.Typography}>
          Frequently asked questions
        </Typography>
      </Grid>

      <Grid item>
        <Typography
          className={classes.Typography}
          align="left"
          component="h6"
          variant="h6"
        >
          General
        </Typography>
      </Grid>

      <Grid item lg={6} md={6} sm={6} xs={12}>
        <ExpansionPanel
          question="What is MethodMelody?"
          answer="MethodMelody is the first streaming platform of Bangladesh that gives you the opportunity to 
            learn your desired musical instrument. 
            Whether you want to learn singing, playing instrument or music production, MethodMelody is 
            your one stop solution to get into music."
        />
      </Grid>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <ExpansionPanel
          question="What is included in a MethodMelody course?"
          answer="MethodMelody provides you in depth understanding of music, note and instrument. Every course 
            has five levels of lesson. Our easy road map will show you how you can be better in music. 
            If you are not looking for road map and you want to learn specific course MethodMelody has 
            solution for you too. Select the course you want to learn and pay for the course you want to learn."
        />
      </Grid>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <ExpansionPanel
          question="How Subscription work in MethodMelody?"
          answer="MethodMelody gives you access to your lessons for 30day for a course. The courses are designed 
            accordingly to make you a better singer/player. Whether you are a beginner or a master there is 
            always a room for learning something new."
        />
      </Grid>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <ExpansionPanel
          question="Where can I learn?"
          answer="With MethodMelody you can absolutely learn your desired lesson in anytime and anywhere 
            including your smartphone, personal computer, TV or any gadget that has internet in it."
        />
      </Grid>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <ExpansionPanel
          question="Which course is perfect for me?"
          answer="MethodMelody offers hundreds of video lesson across variety of instruments, singing and even 
            music production. The courses are designed to be accessible for people with little to no experience 
            and master level student.
            Please watch some trailer videos and checkout our catalog. Even after you are still confused you 
            can always contact us."
        />
      </Grid>
      <Grid>
        <Typography
          variant="h6"
          component="h6"
          className={classes.Typography}
          align="left"
        >
          Pricing & Payment
        </Typography>
      </Grid>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <ExpansionPanel
          question="What is the price for a course?"
          answer="MethodMelody designed their course considering the socio economic states of Bangladesh. Prices 
            may vary from course to course. Whatever the price is, it is worth it."
        />
      </Grid>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <ExpansionPanel
          question="What are the payment methods?"
          answer="MethodMelody allows you to pay in most easy way. You can choose your payment methods. You 
            can always pay with your visa card, master card, debit card, credit card, bKash, rocket, UCash, 
            bank payment (For bank payment, please send us a copy of deposit slip so we can activate your 
            course it may require some time to activate your account that is up to not more than 48hours) even 
            you can physically come and pay for the course you want to purchase."
        />
      </Grid>
      <Grid>
        <Typography
          variant="h6"
          component="h6"
          className={classes.Typography}
          align="left"
        >
          Free Trial
        </Typography>
      </Grid>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <ExpansionPanel
          question="How does the free trial works?"
          answer="MethodMelody offers you a 72 hours of free trail of selected course after you sign up/in. The 
            course that is open during 72 hours will only be open for 96 hours."
        />
      </Grid>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <ExpansionPanel
          question="Who is eligible for free trial?"
          answer="You can sign up for a free trail if you are new to MethodMelody selected-access-pass. If you have 
            previously sign up for free trail, or have experienced the selected-access-pass, then you are not 
            eligible.
            For more information, check out our offer terms."
        />
      </Grid>
    </Grid>
  );
}
