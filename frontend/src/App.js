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
import CourseUploader from "./components/CourseUploader";
import { ProtectedRoute } from "./routes/protected.route";
import NotFound from "./components/NotFound";
import VideoUploader from "./components/VideoUploader";

// import CourseData from "./data/CoursesData";

export default function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/signup' component={Signup} />
				{/* <ProtectedRoute exact path='/course' component={CourseView} /> */}
				<Route exact path='/course' component={CourseView} />
				<Route exact path='/test' component={VideoUploader} />
				<ProtectedRoute exact path='/coursespage' component={CoursesPage} />
				{/* <ProtectedRoute exact path="/courseupload" component={CourseUploader} /> */}
				<Route exact path='/courseupload' component={CourseUploader} />
				{/* <Route exact path="/coursedata" component={CourseData} /> */}
				<Route path='*' component={NotFound} />
				<Redirect to='/' />
			</Switch>
		</Router>
	);
}
