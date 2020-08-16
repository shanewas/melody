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
import InstructorPage from "./components/InstructorPage";
import CoursesPage from "./components/CoursesPage";
import CourseUploader from "./components/CourseUploader";
import { ProtectedRoute } from "./routes/protected.route";
import NotFound from "./components/NotFound";
import InstructorUploader from "./components/Forms/InstructorUploader";
import InstructorEdit from "./components/Forms/InstructorEdit";
import AdminPanel from "./components/Admin/AdminPanel";
import FeatureList from "./components/Admin/InstructorFeatureList";

// import CourseData from "./data/CoursesData";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        {/* <ProtectedRoute exact path='/course' component={CourseView} /> */}
        <Route exact path="/course" component={CourseView} />
        <Route exact path="/instructor" component={InstructorPage} />
        <ProtectedRoute exact path="/coursespage" component={CoursesPage} />
        {/* <ProtectedRoute exact path="/courseupload" component={CourseUploader} /> */}
        <Route exact path="/courseupload" component={CourseUploader} />
        <Route exact path="/instructorupload" component={InstructorUploader} />
        <Route exact path="/instructoredit" component={InstructorEdit} />
        <Route exact path="/admin" component={AdminPanel} />

        <Route exact path="/test" component={FeatureList} />

        {/* <Route exact path="/coursedata" component={CourseData} /> */}
        <Route path="*" component={NotFound} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}
