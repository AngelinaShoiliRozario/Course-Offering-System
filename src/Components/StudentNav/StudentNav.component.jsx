import "./StudentNav.style.css";
import { Link } from "react-router-dom";
const StudentNav = () => {
  return (
    <div id="course-list-navbar">
      <div className="links1">
        <p className="item active">
          <Link to="/student-home">Home</Link>
        </p>
        <p className="item">
          <Link to="/student-profile">My Information</Link>
        </p>
        <p className="item">
          <Link to="/class-routine">My Class Routine</Link>
        </p>
        <p className="item">
          <Link to="/offered-course">Offered Courses</Link>
        </p>
        <p className="log-out">
          <Link to="/log-out">Log Out</Link>
        </p>
      </div>
    </div>
  );
};

export default StudentNav;
