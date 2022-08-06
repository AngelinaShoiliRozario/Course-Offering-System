import { useEffect, useState } from "react";
import { useGlobalState } from "../../state/global";
const DecreaseCredit = (props) => {
  let [currentStudent] = useGlobalState("currentStudent");

  const [done, setDone] = useState(false);

  const DecreaseCredit = async (url, newStudent) => {
    await fetch(url, {
      method: "PUT",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    });
    setDone(true);
  };

  useEffect(() => {
    console.log(currentStudent.credit);
    currentStudent.credit =
      parseInt(currentStudent.credit) - parseInt(props.credit);
    let newStudent = currentStudent;
    console.log("newStudent");
    console.log(newStudent);
    DecreaseCredit(
      `http://localhost:3006/student-list/${newStudent.id}`,
      newStudent
    );
  }, []);

  return (
    <div className="align-text">
      {!done && <p>Please Wait.....Working</p>}
      {done && <p className="click-done">Click Done to Continue</p>}
    </div>
  );
};

export default DecreaseCredit;
