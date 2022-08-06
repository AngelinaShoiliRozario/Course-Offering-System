import { useEffect, useState } from "react";
import IncreaseSeatsHelper from "./IncreaseSeatsHelper.component";

const IncreaseSeats = ({ code }) => {
  const [filteredArray, setFilteredArray] = useState([]);
  const [found, setFound] = useState("");
  const [data, setData] = useState("");

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      let mula = data.filter((element) => {
        return element.code === code;
      });
      setFilteredArray(mula);
      setFound(true);
    } catch (err) {
      console.log("Fetching failed increase setas");
    }
  };
  useEffect(() => {
    fetchData("http://localhost:3006/courses");

    // fetch()
    //   .then((res) => {

    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);

    //     // setFilteredArray(mula);
    //     // console.log(filteredArray);
    //     // setFilteredArray(mula);

    //   });
  }, []);

  return (
    <div className="align-text">
      increase seats of coourse
      {found && (
        <IncreaseSeatsHelper array={filteredArray}></IncreaseSeatsHelper>
      )}
    </div>
  );
};

export default IncreaseSeats;
