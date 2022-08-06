import Login from "./Components/Login/Login.component";
import { useEffect } from "react";
import StudentHome from "./Components/Student-Home/StudentHome.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseList from "./Components/Course-list/Course-list.component";
import StudentProfile from "./Components/StudentProfile/StudentProfile.component";
import LogOut from "./Components/LogOut/LogOut.component";
import Enroll from "./Components/Enroll/Enroll.component";
import AdminHome from "./Components/AdminHome/AdminHome.component";
import AddCourse from "./Components/AddCourse/AddCourse.component";
import AdminCourseList from "./Components/Admin-Course-List/AdminCourseList.component";
import EditCourse from "./Components/EditCourse/EditCourse.component";

import Home from "./Components/Home/Home.component";
import ClassRoutine from "./Components/CLassRoutine/ClassRoutine.component";
import OfferedCourse from "./Components/OfferedCourse/OfferedCourse.component";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/student-home" element={<StudentHome />}></Route>
          <Route path="/course-list" element={<CourseList />}></Route>
          <Route path="/student-profile" element={<StudentProfile />}></Route>
          <Route path="/log-out" element={<LogOut />}></Route>
          <Route path="/enroll/:id" element={<Enroll />}></Route>
          <Route path="/admin-home" element={<AdminHome />}></Route>
          <Route path="/add-course" element={<AddCourse />}></Route>
          <Route
            path="/admin-course-list"
            element={<AdminCourseList />}
          ></Route>
          <Route path="/edit-course/:id" element={<EditCourse />}></Route>
          <Route path="/class-routine" element={<ClassRoutine />}></Route>
          <Route path="/offered-course" element={<OfferedCourse />}></Route>
          <Route path="*" element={<div>error</div>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
