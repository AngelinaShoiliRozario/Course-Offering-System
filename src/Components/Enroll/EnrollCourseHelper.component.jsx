import { useEffect, useState } from "react";
import { useGlobalState } from "../../state/global";
import DecreaseSeats from "./DecreaseSeats.component";
import UpdateRoutine from "./UpdateRoutine.component";
import IncreaseCredit from "./IncreaseCredit.component";
import "./Enroll.style.css";
import RepeatCourse from "./RepeatCourse.component";

const EnrollCourseHelper = (props) => {
  let [currentStudent] = useGlobalState("currentStudent");
  let [selectedCode] = useGlobalState("selectedCode");

  let possible = currentStudent.credit < 16;
  console.log(possible);
  // console.log(props.course);
  let course = props.course;
  let credit = course.credit_hour;
  let [courses] = useGlobalState("courses");
  const [Repeated, setRepeated] = useState(true);

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      let array = data.filter((element) => {
        return (
          element.code === selectedCode && element.stu_id === currentStudent.id
        );
      });
      console.log("array");
      console.log(array);
      console.log("enroll course heleper");
      if (array.length === 0) {
        setRepeated(false);
        console.log("set repeated to ");
        console.log(Repeated);
      }
    } catch (err) {
      console.log("Fetching failed enroll comopo helper");
    }
  };
  useEffect(() => {
    console.log(currentStudent);
    fetchData(` http://localhost:3006/enrolled-courses`);
  }, []);

  // console.log(credit);

  let f = courses[0];

  const [btnClicked, setBtnClicked] = useState(false);

  return (
    <div className="enroll-course-helper">
      {courses && f && (
        <div>
          <h1 className="enroll-course-name">{f.name}</h1>
          <p>
            <b>Seats:</b> {f.seats}
          </p>
          <p>
            <b>Credit hour:</b> {f.credit_hour}
          </p>
          {!possible && <h3>You credit hour limit Exceeded</h3>}
          {Repeated && <RepeatCourse></RepeatCourse>}
          {!btnClicked && !Repeated && possible && (
            <button
              className="btn"
              onClick={(e) => {
                console.log("btn clicked");
                setBtnClicked(true);
              }}
            >
              Enroll
            </button>
          )}
          {btnClicked && !Repeated && <UpdateRoutine></UpdateRoutine>}
          {btnClicked && !Repeated && (
            <DecreaseSeats code={selectedCode}></DecreaseSeats>
          )}

          {btnClicked && !Repeated && (
            <IncreaseCredit credit={credit}></IncreaseCredit>
          )}
        </div>
      )}
    </div>
  );
};

export default EnrollCourseHelper;
