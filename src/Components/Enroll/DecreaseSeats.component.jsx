import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../../state/global";
import DecreaseSeatsHelper from "./DecreaseSeatsHelper.component";

const DecreaseSeats = ({ code }) => {
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
      console.log("Fetching failed decrese setas");
    }
  };
  const abortController = new AbortController();
  useEffect(() => {
    fetchData("http://localhost:3006/courses", {
      signal: abortController.signal,
    });
    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <div className="align-text">
      decrease seats of coourse
      {found && (
        <DecreaseSeatsHelper array={filteredArray}></DecreaseSeatsHelper>
      )}
    </div>
  );
};

export default DecreaseSeats;
