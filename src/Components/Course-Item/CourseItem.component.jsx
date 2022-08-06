import "./CourseItem.style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setGlobalState, useGlobalState } from "../../state/global";

const CourseItem = (props) => {
  const navigate = useNavigate();
  const [daySearch, SetDaySearch] = useState("");
  const [timeSearch, SetTimeSearch] = useState("");
  const [courseSearch, SetCourseSearch] = useState("");
  const [sectionSearch, SetSectionSearch] = useState("");
  const [shiftSearch, SetShiftSearch] = useState("");
  const [instructorSearch, SetInstructorSearch] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(props.courses);

  // console.log(courseSearch);
  // let f = filteredCourses.filter((course) => {
  //   return course.code.toLowerCase().includes(courseSearch);
  // });
  // console.log(f);

  return (
    <table>
      {/* table row 1 */}
      <tbody>
        <tr>
          <th>Serial</th>
          <th>Day</th>
          <th>Time</th>
          <th>Course</th>
          <th>Section</th>
          <th>Shift</th>
          <th>Instructor</th>
        </tr>
        {/* table row 1 */}
        <tr>
          <th>Search</th>
          <th>
            <input
              type="text"
              placeholder="Day"
              onChange={(e) => {
                SetDaySearch(e.target.value);
              }}
            />
          </th>
          <th>
            <input
              type="text"
              placeholder="Time"
              onChange={(e) => {
                SetTimeSearch(e.target.value);
              }}
            />
          </th>
          <th>
            <input
              type="text"
              placeholder="Course"
              onChange={(e) => {
                SetCourseSearch(e.target.value);
              }}
            />
          </th>
          <th>
            <input
              type="text"
              placeholder="Section"
              onChange={(e) => {
                SetSectionSearch(e.target.value);
              }}
            />
          </th>
          <th>
            <input
              type="text"
              placeholder="Shift"
              onChange={(e) => {
                SetShiftSearch(e.target.value);
              }}
            />
          </th>
          <th>
            <input
              type="text"
              placeholder="Instructor"
              onChange={(e) => {
                SetInstructorSearch(e.target.value);
              }}
            />
          </th>
          {/* table row data */}
        </tr>

        {filteredCourses
          .filter((course) => {
            return (
              course.code.toLowerCase().includes(courseSearch.toLowerCase()) &&
              course.day.toLowerCase().includes(daySearch.toLowerCase()) &&
              course.time.toLowerCase().includes(timeSearch.toLowerCase()) &&
              course.section
                .toLowerCase()
                .includes(sectionSearch.toLowerCase()) &&
              course.shift.toLowerCase().includes(shiftSearch.toLowerCase()) &&
              course.instructor
                .toLowerCase()
                .includes(instructorSearch.toLowerCase())
            );
          })
          .map((course, index) => {
            // console.log(course);
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{course.day}</td>
                <td>{course.time}</td>
                <td
                  className="select-course"
                  onClick={(e) => {
                    setGlobalState("selectedCode", course.code);

                    // console.log(e.target.innerText);
                    // console.log(course);
                    navigate(`/enroll/${course.id}`);
                  }}
                >
                  {course.code}
                </td>
                <td>{course.section}</td>
                <td>{course.shift}</td>
                <td>{course.instructor}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default CourseItem;
