import { useEffect, useState } from "react";
import AdminCourseItem from "./Admin-Course-Item.component";

const AdminCourseList = () => {
  const [courses, setCourses] = useState(null);

  useEffect((e) => {
    fetch("http://localhost:3006/courses")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCourses(data);
      });
  }, []);
  return (
    <div className="admin-course-list">
      {courses && <AdminCourseItem courses={courses} />}
    </div>
  );
};

export default AdminCourseList;
