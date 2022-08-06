import AdminNav from "../AdminNav/AdminNav.component";
import AdminCourseList from "../Admin-Course-List/AdminCourseList.component";

import "./AdminHome.style.css";
const AdminHome = () => {
  return (
    <div className="admin-home">
      <div className="admin-home-content">
        <AdminNav />
        <AdminCourseList />
      </div>
    </div>
  );
};

export default AdminHome;
{
}
