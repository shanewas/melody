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
import CoursesPage from "./components/CourseView";
import CourseUploader from "./components/Forms/CourseUploader";
import VideoUploader from "./components/Forms/VideoUploader";
import { ProtectedRoute } from "./routes/protected.route";
import NotFound from "./components/NotFound";
import InstructorUploader from "./components/Forms/InstructorUploader";
import CourseEdit from "./components/Forms/CourseEdit";
import InstructorEdit from "./components/Forms/InstructorEdit";
import AdminPanel from "./components/Admin/AdminPanel";
import StudentPanel from "./components/Student/StudentPanel";
import ViewCourse from "./components/Admin/ViewCourses";
import ViewInstructors from "./components/Admin/ViewInstructors";
import CourseList from "./components/Course/CourseList";
import InstructorList from "./components/Instructor/InstructorList";

import Card from "./components/Course/Card";

// import CourseData from "./data/CoursesData";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        {/* <ProtectedRoute exact path='/course' component={CourseView} /> */}

        <Route exact path="/course" component={CoursesPage} />
        <Route exact path="/course/all" component={CourseList} />
        <Route exact path="/instructor" component={InstructorPage} />
        <Route exact path="/instructor/all" component={InstructorList} />
        {/* <ProtectedRoute exact path="/courseupload" component={CourseUploader} /> */}
        <Route exact path="/courseupload" component={CourseUploader} />
        <Route exact path="/instructorupload" component={InstructorUploader} />
        <Route exact path="/videoupload" component={VideoUploader} />

        <Route exact path="/courseedit" component={CourseEdit} />
        <Route exact path="/instructoredit" component={InstructorEdit} />

        <Route exact path="/admin" component={AdminPanel} />
        <Route exact path="/admin/viewcourse" component={ViewCourse} />
        <Route exact path="/admin/viewinstructor" component={ViewInstructors} />

        <Route exact path="/studentpanel" component={StudentPanel} />

        <Route exact path="/test" component={Card} />

        {/* <Route exact path="/coursedata" component={CourseData} /> */}
        <Route path="*" component={NotFound} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}
