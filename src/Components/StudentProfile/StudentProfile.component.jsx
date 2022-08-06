import "./StudentProfile.style.css";
import StudentNav from "../StudentNav/StudentNav.component";
import { useGlobalState } from "../../state/global";

const StudentProfile = () => {
  let [currentStudent] = useGlobalState("currentStudent");
  return (
    <div className="student-profile-outer">
      <StudentNav />
      <div className="student-profile">
        <h1 className="title">Student Information</h1>
        <div className="info-content">
          <p>
            <b>Name:</b> {currentStudent.name}
          </p>
          <p>
            <b>ID:</b> {currentStudent.id}
          </p>
          <p>
            <b>Department:</b> {currentStudent.department}
          </p>
          <p>
            <b>Email:</b> {currentStudent.email}
          </p>
          <p>
            <b>Mobile:</b> {currentStudent.mobile}
          </p>
          <p>
            <b>CGPA:</b> {currentStudent.cgpa}
          </p>
          <p>
            <b>Status:</b>
            {currentStudent.status}
          </p>
          <p>You can take maximum 16 credits</p>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
