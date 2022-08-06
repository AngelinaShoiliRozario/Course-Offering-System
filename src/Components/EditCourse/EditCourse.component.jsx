import "./EditCourse.style.css";
import { useParams } from "react-router-dom";
import AdminNav from "../AdminNav/AdminNav.component";
import { useEffect, useState } from "react";
import EditCourseItem from "./EditCourseItem.component";
const EditCourse = () => {
  const { id } = useParams();
  const [isPending, setIsPending] = useState(true);
  const [course, setCourse] = useState("");

  useEffect(() => {
    const abortController = new AbortController();
    fetch(`http://localhost:3006/courses/${id}`, {
      signal: abortController.signal,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCourse(data);
        console.log(course);
        setIsPending(false);
      });
    return () => {
      abortController.abort();
    };
  }, []);

  // if (isPending !== true) {
  //   // console.log("this is false");
  // }

  return (
    <div className="edit-course">
      <AdminNav></AdminNav>
      <h1>Edit Course</h1>
      {!isPending && <EditCourseItem course={course}></EditCourseItem>}
    </div>
  );
};

export default EditCourse;
