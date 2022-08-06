import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditCourse.style.css";
const EditCourseItem = (props) => {
  // all states are here
  const [course, setCourse] = useState(props.course);
  const [name, setName] = useState(course.name);
  const [code, setCode] = useState(course.code);
  const [instructor, setInstructor] = useState(course.instructor);
  const [shift, setShift] = useState(course.shift);
  const [time, setTime] = useState(course.time);
  const [section, setSection] = useState(course.section);
  const [day, setDay] = useState(course.day);
  const [seats, setSeats] = useState(course.seats);
  const [credit_hour, setCredit_hour] = useState(course.credit_hour);
  const navigate = useNavigate();

  //   update course
  const updateCourse = () => {
    let new_course = {
      name,
      code,
      shift,
      time,
      section,
      day,
      instructor,
      seats,
      credit_hour,
    };
    fetch(`http://localhost:3006/courses/${course.id}`, {
      method: "PUT",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(new_course),
    });
    // console.log(new_course, "added successfully");

    navigate("/admin-home");
  };

  return (
    <div className="add-course-form">
      <form>
        <div className="txt-field">
          <label>
            <b>Course Name:</b>
          </label>
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <br />
        <div className="txt-field">
          <label>
            <b>Course Code:</b>
          </label>
          <input
            className="input"
            type="text"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
            }}
          />
        </div>

        <br />
        <div className="txt-field">
          <label>
            <b>Instructor:</b>
          </label>
          <input
            className="input"
            type="text"
            value={instructor}
            onChange={(e) => {
              setInstructor(e.target.value);
            }}
          />
        </div>

        <br />
        <div className="txt-field">
          <label>
            <b>Section:</b>
          </label>
          <input
            className="input"
            type="text"
            value={section}
            onChange={(e) => {
              setSection(e.target.value);
            }}
          />
        </div>

        <br />

        <div className="txt-field">
          <label className="day">{day}</label>
          <input
            type="text"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
        </div>

        <br />
        <div className="txt-field">
          <label>
            <b>Shift:</b>
          </label>
          <input
            className="input"
            type="text"
            value={shift}
            onChange={(e) => {
              setShift(e.target.value);
            }}
          />
        </div>
        <br />
        <div className="txt-field">
          <label>
            <b>Credit Hour:</b>
          </label>
          <input
            className="input"
            type="text"
            value={credit_hour}
            onChange={(e) => {
              setCredit_hour(e.target.value);
            }}
          />
        </div>
        <br />
        <div className="txt-field">
          <label>
            <b>Available Seats:</b>
          </label>
          <input
            className="input"
            type="text"
            value={seats}
            onChange={(e) => {
              setSeats(e.target.value);
            }}
          />
        </div>
        <div className="submit-course">
          <button
            onClick={(e) => {
              e.preventDefault();
              //   console.log(name);
              //   console.log(code);
              //   console.log(instructor);
              //   console.log(section);
              //   console.log(day);
              //   console.log(time);
              //   console.log(shift);
              //   console.log(credit_hour);
              //   console.log(seats);
              updateCourse();
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCourseItem;
