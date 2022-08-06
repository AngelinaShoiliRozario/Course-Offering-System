import { useEffect, useState } from "react";
import CourseItem from "../Course-Item/CourseItem.component";
import StudentNav from "../StudentNav/StudentNav.component";
import { useGlobalState } from "../../state/global";

import "./Course-list.style.css";

const CourseList = () => {
  const [loading, setLoading] = useState(true);
  let [currentStudent] = useGlobalState("currentStudent");
  console.log(currentStudent);
  console.log(currentStudent.cgpa > 2.0);
  console.log("courselist");

  const [courses, setCourses] = useState(null);
  useEffect(() => {
    const abortController = new AbortController();
    // console.log("hello");
    fetch("http://localhost:3006/courses", { signal: abortController.signal })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        setCourses(data);
        setLoading(false);
        //console.log(courses);
      });
    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <div className="course-enrollment">
      <StudentNav />
      <h1>All courses</h1>
      {loading && <h1 className="align-text">Loading the list..</h1>}
      {!loading && courses && currentStudent.cgpa > 2.0 && (
        <CourseItem courses={courses} />
      )}
      {currentStudent.cgpa < 2.0 && (
        <h1 className="probation-student">
          Contact to the department for course enrollment issue
        </h1>
      )}
    </div>
  );
};

export default CourseList;
