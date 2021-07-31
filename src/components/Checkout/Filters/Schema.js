import React from "react";
import "./Schema.css";

const Schema = ({ HostelData }) => {
  return HostelData.map((hostel) => {
    return (
      <div key={hostel.id}>
        <div className="trialcard">
          <img src={hostel.img} alt="" class="abc"></img>
          <div className="details">
            <strong>{hostel.Hostelname}</strong>
            <p>Location : {hostel.location}</p>
            <h>Interest Available:</h>
            <button>{hostel.interest}</button>
            <div className="trialcard__user">
              <h>Current Users:</h>
              <p>{hostel.currentuser}</p>
            </div>
            <div className="price__ratings">
              <strong>Rent - ₹{hostel.price} </strong>
              <strong>Rating - {hostel.rating}</strong>
            </div>
          </div>
        </div>
      </div>
    );
  });
};
export default Schema;
