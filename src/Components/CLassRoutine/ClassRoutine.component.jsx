import { useEffect, useState } from "react";
import { useGlobalState } from "../../state/global";
import RoutineHelper from "./RoutineHelper.component";
import StudentNav from "../StudentNav/StudentNav.component";

const ClassRoutine = () => {
  const [currentStudent] = useGlobalState("currentStudent");
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState();
  useEffect(() => {
    fetch(`http://localhost:3006/enrolled-courses`)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch");
        }
        return res.json();
      })
      .then((data) => {
        let array = data.filter((element) => {
          return element.stu_id === currentStudent.id;
        });
        setEnrolledCourses(array);
        console.log(array);

        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="class-routine">
      <StudentNav></StudentNav>
      {!loading &&
        enrolledCourses.map((enrolled_course) => (
          <RoutineHelper
            code={enrolled_course.code}
            key={enrolled_course.id}
          ></RoutineHelper>
        ))}
    </div>
  );
};

export default ClassRoutine;
