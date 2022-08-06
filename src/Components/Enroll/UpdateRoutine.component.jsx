import { useGlobalState } from "../../state/global";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UpdateRoutine = () => {
  // all states
  let navigate = useNavigate();
  let [courses] = useGlobalState("courses");
  let [currentStudent] = useGlobalState("currentStudent");
  let [selectedCode] = useGlobalState("selectedCode");
  const [stu_id, setStu_id] = useState(currentStudent.id);
  const [code, setCode] = useState(selectedCode);
  const [updating, setUpdating] = useState(true);

  // use effect
  const up = async (url, enrolled_course) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enrolled_course),
    });
  };

  useEffect(() => {
    let enrolled_course = { stu_id, code };
    console.log(enrolled_course);

    up("http://localhost:3006/enrolled-courses", enrolled_course);
    console.log("Done updating");
    setUpdating(false);
  }, []);

  let [vl] = useGlobalState("courses");
  console.log(vl);
  return (
    <div>
      {updating && <h1>Updating ....</h1>}
      {!updating && (
        <h1>
          <button
            className="btn"
            onClick={(e) => {
              navigate("/course-list");
            }}
          >
            Done
          </button>
        </h1>
      )}
    </div>
  );
};

export default UpdateRoutine;
