import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/SignIn";
import CourseView from "./components/CourseView";

export default function App(){
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/course" component={CourseView}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
}