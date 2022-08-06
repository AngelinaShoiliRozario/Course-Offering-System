import { useEffect, useState } from "react";
import { useGlobalState } from "../../state/global";
import Remove from "./Remove.component";
import StudentNav from "../StudentNav/StudentNav.component";

const OfferedCourse = () => {
  const [loading, setLoading] = useState(true);
  const [enrolled, setEnrolled] = useState("");
  let [currentStudent] = useGlobalState("currentStudent");
  useEffect(() => {
    fetch("http://localhost:3006/enrolled-courses")
      .then((res) => {
        if (!res.ok) {
          throw Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        let array = data.filter((d) => {
          return d.stu_id === currentStudent.id;
        });
        // console.log(array);
        setEnrolled(array);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <StudentNav></StudentNav>
      {!loading && <Remove array={enrolled}></Remove>}
    </div>
  );
};

export default OfferedCourse;
