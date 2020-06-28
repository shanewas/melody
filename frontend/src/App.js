import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/SignIn";

export default function App(){
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
}