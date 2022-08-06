import { useEffect, useState } from "react";
import "./ClassRoutine.style.css";
import Item from "./Item.component";

const RoutineHelper = (props) => {
  const [loading, setLoading] = useState();
  let code = props.code;
  const [courseName, setCourseName] = useState("");

  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3006/courses")
      .then((res) => {
        if (!res.ok) {
          throw Error("Unable to fetch");
        } else return res.json();
      })
      .then((data) => {
        let array = data.filter((course) => {
          return course.code === code;
        });
        setCourses(array);
        console.log(array);
        setCourseName(array[0].name);
        setLoading(false);
      });
  }, []);
  return (
    <div className="routine">
      <h1>{courseName}</h1>
      <table>
        <tbody>
          <tr>
            <th>Serial</th>
            <th>Course Code</th>
            <th>Day</th>
            <th>time</th>
            <th>Section</th>
            <th>Shift</th>
            <th>Room</th>
          </tr>

          {!loading &&
            courses.map((course) => {
              return <Item course={course} key={course.id}></Item>;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default RoutineHelper;
