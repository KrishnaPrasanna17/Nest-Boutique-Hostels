import React, { useState } from "react";
import Schema from "./Schema";
import { HostelData } from "./HostelData";
import Dropdown from "./Filter";
import Price from "./Price/Price";
import './List.css'
import Date from './Date'


function List() {
  const [locations, setLocations] = useState("");
  const [interests, setInterests] = useState("");
  console.log(locations, interests);

  const handleLocation = (e) => {
    setLocations(e.target.value);
  };

  const handleInterest = (e) => {
    setInterests(e.target.value);
  };

  const filteredHostels = HostelData.filter((hostel) => {
    if (interests == "All" && locations == "All") {
      return HostelData;
    } else if (interests != "All" && locations == "All") {
      return hostel.interest.includes(interests);
    } else if (interests == "All" && locations != "All") {
      return hostel.location.includes(locations);
    } else {
      return (
        hostel.location.includes(locations) &&
        hostel.interest.includes(interests)
      );
    }
  });

  return (
    <div className='list1'>
      <div className='list2'>
      <Date/>
        <Price />
        <Dropdown onLocation={handleLocation} onInterest={handleInterest} />
      </div>
      <Schema HostelData={filteredHostels} />
    </div>
  );
}

export default List;
