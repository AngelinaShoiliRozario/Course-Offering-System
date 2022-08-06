import { useEffect } from "react";
import { useGlobalState } from "../../state/global";

const IncreaseCredit = (props) => {
  let credit = props.credit;
  let [currentStudent] = useGlobalState("currentStudent");
  const increaseCredit = async (url, newStudent) => {
    await fetch(url, {
      method: "PUT",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    });
  };
  useEffect(() => {
    console.log(currentStudent.credit);
    currentStudent.credit = parseInt(currentStudent.credit) + parseInt(credit);
    let newStudent = currentStudent;
    console.log("newStudent");
    console.log(newStudent);
    increaseCredit(
      `http://localhost:3006/student-list/${currentStudent.id}`,
      newStudent
    );
    return () => {};
  });
  return (
    <div className="increase-credit">Successfully added to your credit</div>
  );
};

export default IncreaseCredit;
