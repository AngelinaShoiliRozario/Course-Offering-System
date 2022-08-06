import "./StudentHome.style.css";
import { useNavigate } from "react-router-dom";
import StudentNav from "../StudentNav/StudentNav.component";
import { useGlobalState } from "../../state/global";
const StudentHome = () => {
  // let [user] = useGlobalState("user");
  // console.log(user);
  // let [id] = useGlobalState("id");
  let [currentStudent] = useGlobalState("currentStudent");
  console.log(currentStudent);
  let navigate = useNavigate();
  return (
    <div className="S_Home">
      <div className="studentHome">
        <StudentNav />

        <p className="system-name">Course Offering System</p>
        <div className="information">
          <div className="upper">
            Some important notices for all the students:
          </div>
          <div className="middle">
            <p>1. Choose your course from the course list</p>
            <p>
              2. If you are under suspension,promotion, dismissal problem, you
              can take maximum 8-12 credit
            </p>
            <p>3. You can take upto 16 credit maximum</p>
            <p>
              4. If you can not choose course/courses, then inform the
              department immediately for solution of the problem
            </p>
            <p>
              5. For system related problem please send your email to
              <b>problem@gmail.com</b>
            </p>
            <p>6. Please don't share your password with others</p>
            <p>
              7. If you are facing problem in offering any course please contact
              to
              <b>help@gmail.com</b>
            </p>
          </div>
          <div className="note">
            <h1>Note:</h1>
            <p>
              If your CGPA is less than 2.00 then contact to the department
              immediately
            </p>
          </div>
          <div className="result-status">
            <div className="header">Result Status</div>
            <div className="values">
              <div>Result: {currentStudent.cgpa}</div>
              <div>Status: {currentStudent.status}</div>
              <p>
                {currentStudent.cgpa > 2.0 && (
                  <b>You can take any course MAX 16 credits</b>
                )}
                {currentStudent.cgpa <= 2.0 && (
                  <b>
                    You can not enroll for any course. <br></br>Contact to the
                    department
                  </b>
                )}
              </p>
            </div>
          </div>
          <div className="course-enrollment">
            <button
              onClick={() => {
                navigate("/course-list");
              }}
            >
              Course Enrollment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentHome;
