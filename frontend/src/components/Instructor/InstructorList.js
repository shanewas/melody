import React, { useEffect, useState } from "react";
import axios from "../../api/Config";

import InstructorViewHome from "../InstructorViewHome";
export default function InstructorList(props) {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    getInstructors();
  }, []);

  function getInstructors() {
    axios
      .get("instructor/", {
        headers: {
          "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5ld2FzYWhtZWRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQb3RhdG83MjYiLCJpYXQiOjE1OTU4NjA3MzYsImV4cCI6MTU5NTg2NDMzNn0.IRPW-1hioz4LZABZrmtYakjmDwORfKnzIWkwK3DzAXc`,
        },
      })
      .then((res) => {
        setInstructors(res.data);
      });
  }

  return (
    <div>
      <InstructorViewHome instructors={instructors} from="instructorList"/>
    </div>
  );
}
