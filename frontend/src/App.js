import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/SignIn";
import Signup from "./components/SignUp";
import CourseView from "./components/CourseView";
import CoursesPage from "./components/CoursesPage";

// import CourseData from "./data/CoursesData";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/course" component={CourseView} />
        <Route exact path="/coursespage" component={CoursesPage} />
        {/* <Route exact path="/coursedata" component={CourseData} /> */}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}
