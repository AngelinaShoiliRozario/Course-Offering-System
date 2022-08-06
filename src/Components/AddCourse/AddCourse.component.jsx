import "./AddCourse.style.css";

import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AdminNav from "../AdminNav/AdminNav.component";
const AddCourse = () => {
  const [courseName, setName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [courseSection, setSection] = useState("");
  const [courseShift, setShift] = useState("");
  const [courseInstructor, setInstructor] = useState("");
  const [days, setDays] = useState("");
  const [courseSeats, setSeats] = useState("");
  const [courseCredit_hour, setCredit_hour] = useState("");
  const [sundayTime, setSundayTime] = useState("");
  const [mondayTime, setMondayTime] = useState("");
  const [tuesdayTime, setTuesdayTime] = useState("");
  const [wednesdayTime, setWednesdayTime] = useState("");
  const [thursdayTime, setThursdayTime] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("button clicked");
    let name = courseName;
    let code = courseCode;
    let shift = courseShift;
    let section = courseSection;
    let seats = courseSeats;
    let credit_hour = courseCredit_hour;
    let instructor = courseInstructor;
    let day, time;

    if (sundayTime) {
      day = "Sunday";
      time = sundayTime;
      const course = {
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
      fetch("http://localhost:3006/courses", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(course),
      }).then(() => {
        console.log("new course added");
        console.log(course);
      });
    }

    if (mondayTime) {
      day = "Monday";
      time = mondayTime;
      const course = {
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
      fetch("http://localhost:3006/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(course),
      }).then(() => {
        //console.log("new course added");
        //console.log(course);
      });
    }
    if (tuesdayTime) {
      day = "Tuesday";
      time = tuesdayTime;
      const course = {
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
      fetch("http://localhost:3006/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(course),
      }).then(() => {
        //console.log("new course added");
        //console.log(course);
      });
    }
    if (wednesdayTime) {
      day = "Wednesday";
      time = wednesdayTime;
      const course = {
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
      fetch("http://localhost:3006/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(course),
      }).then(() => {
        //console.log("new course added");
        //console.log(course);
      });
    }
    if (thursdayTime) {
      day = "Thursday";
      time = thursdayTime;
      const course = {
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
      fetch("http://localhost:3006/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(course),
      }).then(() => {
        //console.log("new course added");
        //console.log(course);
      });
    }
    // navigate
    navigate("/admin-home");
  };

  return (
    <div className="add-course">
      <AdminNav></AdminNav>
      <h1>Add A Course</h1>
      <div className="add-course-form">
        <form action="">
          <div className="txt-field">
            <label>
              <b>Course Name:</b>
            </label>
            <input
              className="input"
              type="text"
              placeholder="Java Programming"
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
              placeholder="CSC 438"
              onChange={(e) => {
                setCourseCode(e.target.value);
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
              placeholder="Mr. X"
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
              placeholder="C"
              onChange={(e) => {
                setSection(e.target.value);
              }}
            />
          </div>

          <br />

          <div className="align">
            <label>
              <b>Days in Week</b>
            </label>
          </div>
          <div className="txt-field">
            <label className="day">Sunday</label>
            <input
              type="text"
              placeholder="Time-limit"
              onChange={(e) => {
                setSundayTime(e.target.value);
              }}
            />
          </div>
          <div className="txt-field">
            <label className="day">Monday</label>
            <input
              type="text"
              placeholder="Time-limit"
              onChange={(e) => {
                setMondayTime(e.target.value);
              }}
            />
          </div>
          <div className="txt-field">
            <label className="day">Tuesday</label>
            <input
              type="text"
              placeholder="Time-limit"
              onChange={(e) => {
                setTuesdayTime(e.target.value);
              }}
            />
          </div>
          <div className="txt-field">
            <label className="day">Wednesday</label>
            <input
              type="text"
              placeholder="Time-limit"
              onChange={(e) => {
                setWednesdayTime(e.target.value);
              }}
            />
          </div>
          <div className="txt-field">
            <label className="day">Thursday</label>
            <input
              type="text"
              placeholder="Time-limit"
              onChange={(e) => {
                setThursdayTime(e.target.value);
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
              placeholder="Day"
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
              placeholder="00"
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
              placeholder="00"
              onChange={(e) => {
                setSeats(e.target.value);
              }}
            />
          </div>
          <div className="submit-course">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
