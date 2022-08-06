import { useEffect, useState } from "react";
import DecreaseCredit from "./DecreaseCredit.component";

const IncreaseSeatsHelper = (props) => {
  const [array, setArray] = useState(props.array);
  console.log(props.array);
  const [credit, setCredit] = useState(props.array[0].credit_hour);
  const [increasing, setIncreasing] = useState(true);
  const [processing, setProcessing] = useState(false);
  let count = 1;
  let requests = [];

  const onAfterIncrement = async (array) => {
    for (let i = 0; i < array.length; i++) {
      console.log(array.length); //3
      console.log(array[i]);
      array[i].seats++;
      const r = await fetch(`http://localhost:3006/courses/${array[i].id}`, {
        method: "PUT",
        headers: {
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(array[i]),
      })
        .then((res) => {
          if (!res.ok) {
            throw Error("Hay amar kopal");
          } else {
            console.log(`increased course seats ${array[i].id}`);
            return Promise.resolve(true);
          }
        })
        .catch((e) => {
          console.error("there was an error:", e.message);
          return Promise.resolve(false);
        });
      requests.push(r);
    }
    console.log("Left For Loop");

    // wait until all requests are done!
    await Promise.all(requests).then((results) => {
      setIncreasing(false);
      // here we have all the results
      console.log("all requests finished!", results);
      for (let i = 0; i < requests.length; i++) {
        console.log(i, "request result in", results[i]);
      }
    });
  };
  useEffect(() => {
    onAfterIncrement(array);
    //   await Promise.all(requests).then((results)=>{
    //     // here we have all the results

    //     console.log('all requests finished!', results);
    //     for(let i = 0; i < requests.length; i++){
    //       console.log(i, 'request resultet in', results[i]);
    //     }
    // });
    // props.array.map((course) => {
    //   //   console.log(course.seats);
    //   //   console.log(course.seats);
    //   //   console.log(course.id);

    //   course.seats++;
    //   fetch(`http://localhost:3006/courses/${course.id}`, {
    //     method: "PUT",
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(course),
    //   }).then(() => {
    //     console.log(`increased course seats ${course.id}`);
    //   });
    // });
  }, []);
  return (
    <div>
      {!increasing && <b>Successful</b>}
      {!increasing && <DecreaseCredit credit={credit}></DecreaseCredit>}
    </div>
  );
};

export default IncreaseSeatsHelper;
