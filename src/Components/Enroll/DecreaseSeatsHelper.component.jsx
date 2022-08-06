import { useEffect, useState } from "react";
const DecreaseSeatsHelper = (props) => {
  const [array, setArray] = useState(props.array);
  console.log(props.array);
  const [credit, setCredit] = useState(props.array[0].credit_hour);
  const [decreasing, setDecreasing] = useState(true);
  const [processing, setProcessing] = useState(false);
  let count = 1;
  let requests = [];

  const onAfterDecrement = async (array) => {
    for (let i = 0; i < array.length; i++) {
      // /
      console.log(array[i]);
      array[i].seats--;
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
            console.log(`decreased course seats ${array[i].id}`);
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
      setDecreasing(false);
      // here we have all the results
      console.log("all requests finished!", results);
      for (let i = 0; i < requests.length; i++) {
        console.log(i, "request promise in", results[i]);
      }
    });
  };

  useEffect(() => {
    onAfterDecrement(array);
  }, []);

  return (
    <div>
      {decreasing && <b>increasing seats</b>}
      {!decreasing && <b>Successful</b>}
    </div>
  );
};

export default DecreaseSeatsHelper;
