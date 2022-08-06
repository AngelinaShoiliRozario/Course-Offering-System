import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./AdminCourseList.style.css";
import { useEffect } from "react";

const AdminCourseItem = (props) => {
  const [daySearch, SetDaySearch] = useState("");
  const [timeSearch, SetTimeSearch] = useState("");
  const [courseSearch, SetCourseSearch] = useState("");
  const [sectionSearch, SetSectionSearch] = useState("");
  const [shiftSearch, SetShiftSearch] = useState("");
  const [instructorSearch, SetInstructorSearch] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(props.courses);
  const [creditHourSearch, SetCreditHourSearch] = useState("");
  const [availableSeatsSearch, SetAvailableSeatsSearch] = useState("");
  console.log(filteredCourses);

  return (
    <div className="admin-course-item">
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
            <th>Credit Hour</th>
            <th>Available Seats</th>
            <th>Edit</th>
            <th>Delete</th>
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
            <th>
              <input
                type="text"
                placeholder="credit-hour"
                onChange={(e) => {
                  SetCreditHourSearch(e.target.value);
                }}
              />
            </th>
            <th>
              <input
                type="text"
                placeholder="Available seats"
                onChange={(e) => {
                  SetAvailableSeatsSearch(e.target.value);
                }}
              />
            </th>
            <th>Edit</th>
            <th>Delete</th>
            {/* table row data */}
          </tr>

          {filteredCourses
            .filter((course) => {
              return (
                course.code
                  .toLowerCase()
                  .includes(courseSearch.toLowerCase()) &&
                course.day.toLowerCase().includes(daySearch.toLowerCase()) &&
                course.time.toLowerCase().includes(timeSearch.toLowerCase()) &&
                course.section
                  .toLowerCase()
                  .includes(sectionSearch.toLowerCase()) &&
                course.shift
                  .toLowerCase()
                  .includes(shiftSearch.toLowerCase()) &&
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
                  <td>{course.code}</td>
                  <td>{course.section}</td>
                  <td>{course.shift}</td>
                  <td>{course.instructor}</td>
                  <td>{course.credit_hour}</td>
                  <td>{course.seats}</td>
                  <td>
                    <Link to={`/edit-course/${course.id}`}>Edit</Link>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        fetch("http://localhost:3006/courses/" + course.id, {
                          method: "DELETE",
                        }).then(() => {
                          window.location.reload();
                          // useNavigate("log-out");
                        });
                        // console.log(course.id);
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCourseItem;
