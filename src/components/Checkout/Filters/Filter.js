import React from "react";
import './Filter.css'

const Dropdown = ({ onLocation, onInterest }) => (
  <div className="filter__page">
    <h3>Filters</h3>
    <div className="dropdown__boxes">
      <label htmlFor="Location">Location</label>
      <select name="location" onChange={onLocation}>
        <option value="All">All</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Chennai">Chennai</option>
        <option value="Kolkata">Kolkata</option>
        <option value="Jaipur">Jaipur</option>
        <option value="Lucknow">Lucknow</option>
        <option value="Visakhapatnam">Visakhapatnam</option>
        <option value="Srinagar">Srinagar</option>
      </select>

      

      <label htmlFor="Interest">Interest</label>
      <select name="interest" onChange={onInterest}>
        <option value="All">All</option>
        <option value="Sports">Sports</option>
        <option value="Music">Music</option>
        <option value="Dance">Dance</option>
        <option value="Travel">Travel</option>
        <option value="Fitness">Fitness</option>
        <option value="Photography">Photography</option>
        <option value="Art">Art</option>
      </select>
    </div>
  </div>
);

export default Dropdown;
