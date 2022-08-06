import "./Enroll.style.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { setGlobalState, useGlobalState } from "../../state/global";
import EnrollCourseHelper from "./EnrollCourseHelper.component";
import StudentNav from "../StudentNav/StudentNav.component";

const Enroll = () => {
  let [selectedCode] = useGlobalState("selectedCode");
  let { id } = useParams();

  const [loading, setLoading] = useState(true);

  const [courses, setCourses] = useState([]);

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("fetched data ");

      let array = data.filter((element) => {
        return element.code === selectedCode;
      });
      setGlobalState("courses", array);
      setCourses(array);
      console.log(array);
      setLoading(false);
    } catch (err) {
      console.log("Fetching failed enroll components");
    }
  };

  useEffect(() => {
    console.log("selected code is " + selectedCode);
    fetchData(`http://localhost:3006/courses`);
  }, []);

  return (
    <>
      <StudentNav></StudentNav>
      <div className="enroll">
        {loading && <h1 className="loading">Loading....</h1>}
        {courses && !loading && (
          <EnrollCourseHelper course={courses[0]}> </EnrollCourseHelper>
        )}
      </div>
    </>
  );
};

export default Enroll;
