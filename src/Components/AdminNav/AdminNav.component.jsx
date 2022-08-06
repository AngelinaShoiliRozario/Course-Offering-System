import "./AdminNav.style.css";
import { Link } from "react-router-dom";
const AdminNav = () => {
  return (
    <div className="admin-navbar">
      <div className="admin_links">
        <p className="admin-active">
          <Link to="/admin-home">Home</Link>
        </p>
        <p className="admin-active">
          <Link to="/add-course">Add Course</Link>
        </p>
        <p className="admin-log-out">
          <Link to="/log-out">Log Out</Link>
        </p>
      </div>
    </div>
  );
};

export default AdminNav;
