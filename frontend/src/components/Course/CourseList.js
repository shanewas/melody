import React, { useEffect, useState } from "react";

import CourseViewHome from "../CourseViewHome";
import axios from "../../api/Config";

export default function CourseList(props) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (props.location.state) {
      getCategoryCourses();
    } else getCourses();
  });

  function getCourses() {
    axios
      .get("course/", {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        },
      })
      .then((res, err) => {
        setCourses(res.data);
        console.log("course list fetched in home: " + res.data.length);
      });
  }

  function getCategoryCourses() {
    const url = "course/catagory/" + props.location.state;

    axios
      .get(url, {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        },
      })
      .then((res) => {
        setCourses(res.data);
      });
  }

  return (
    <div>
      <CourseViewHome courses={courses} from="CourseList" />
    </div>
  );
}
