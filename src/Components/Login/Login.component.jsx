import "./Login.style.css";
import { useNavigate } from "react-router-dom";
import { setGlobalState } from "../../state/global";
import { useGlobalState } from "../../state/global";
import { useState } from "react";

const Login = () => {
  const [isLoading, setIsLoading] = useState(true);
  let [student, setStudent] = useState("");
  let [error, setError] = useState("");
  let [user] = useGlobalState("user");
  let [currentStudent] = useGlobalState("currentStudent");

  let navigate = useNavigate();
  const btnSubmit = (id, pass, role) => {
    // console.log(id, pass, role);
    if (role === "student") {
      setGlobalState("user", "student");
      setGlobalState("id", id);
      // navigate("/student-home");
      fetch(` http://localhost:3006/student-list/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw Error("invalid user");
          }
          return res.json();
        })
        .then((data) => {
          setStudent(data);
          setGlobalState("currentStudent", data);
          setIsLoading(false);
          navigate("/student-home");
          if (isLoading === false) {
            console.log(student);
          }
        })
        .catch((error) => {
          setError(error.message);
        });
    }
    if (role === "admin") {
      setGlobalState("user", "admin");
      if (id === "admin" && pass === "admin123") {
        navigate("/admin-home");
      } else {
        setError("Invalid User");
      }
    }
  };
  let id;
  let pass;
  let role;

  // console.log(user);

  return (
    <div className="login-page">
      <h1>ONLINE COURSE OFFERING SYSTEM</h1>
      <div className="login">
        <p className="head">Login to your account</p>
        <form className="form">
          <input
            className="input1"
            type="text"
            placeholder="&#xf007; your-id/ username"
            onChange={(e) => {
              e.preventDefault();
              id = e.target.value;
            }}
          />
          <label>Your ID/ UserName</label>
          <br />
          <input
            className="input2"
            type="password"
            placeholder="&#xf023; your password"
            onChange={(e) => {
              e.preventDefault();
              pass = e.target.value;
            }}
          />
          <label>Your Password</label>
          <div className="check">
            <div className="admin-check">
              <input
                onChange={() => {
                  role = "admin";
                }}
                className="radio-input"
                type="radio"
                name="check-role"
                id="admin"
              />
              <label htmlFor="admin">Admin</label>
            </div>
            <div className="student-check">
              <input
                onChange={() => {
                  role = "student";
                }}
                className="radio-input"
                type="radio"
                name="check-role"
                id="student"
              />
              <label htmlFor="student">Student</label>
            </div>
          </div>
          {error && <div className="error">{error.toUpperCase()}</div>}
          <div className="btn">
            <button
              onClick={(e) => {
                e.preventDefault();
                btnSubmit(id, pass, role);
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
