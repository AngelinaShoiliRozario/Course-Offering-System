import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../../state/global";
import DecreaseSeats from "../Enroll/DecreaseSeats.component";
import DecreaseCredit from "./DecreaseCredit.component";
import IncreaseSeats from "./IncreaseSeats.component";
import "./OfferedCourse.style.css";

const Remove = (props) => {
  const navigate = useNavigate();
  const array = props.array;
  const [p, setP] = useState(false);
  const [selectedCourseCode, setSelectedCourseCode] = useState("");
  const [selectedCourseCredit, setSelectedCourseCredit] = useState("");
  const [r, setR] = useState(false);
  const [courses, setCourses] = useState([]);
  const [offeredCourses, setOfferedCourse] = useState([]);

  const btnHandle = () => {};

  useEffect(() => {
    // fetch(" http://localhost:8000/courses")
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw Error("failed to fetch data");
    //     } else return res.json();
    //   })
    //   .then((data) => {
    //     setCourses(data);
    //   });
  }, []);
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Course Code</th>
            <th>Remove</th>
          </tr>

          {array.map((element) => (
            <tr key={element.id}>
              <td>{element.code}</td>
              <td>
                <button
                  onClick={(e) => {
                    setSelectedCourseCode(element.code);

                    fetch(
                      "http://localhost:3006/enrolled-courses/" + element.id,
                      {
                        method: "DELETE",
                      }
                    ).then(() => {
                      setP(true);
                    });
                  }}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {p && <IncreaseSeats code={selectedCourseCode}></IncreaseSeats>}

      {p && (
        <div className="btn-container">
          <button
            className="btn offered-course-btn"
            onClick={() => {
              navigate("/course-list");
            }}
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
};

export default Remove;
