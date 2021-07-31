import React from "react";
import "./Hostels.css";
import Card from "./../Card/Card";

function Hostels() {
  return (
    <div className="hostels">
      <div className="hostels__section">
        <Card
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="Hostel Cube"
          user="Amit"
          location="Kolkata"
          description="Great place for a short stay, host is pretty chill guy and consequently the whole place is pretty chilled out. Clean washrooms and clean rooms, a bargain for its location and hygiene."
          price="₹1000"
          rating="4.3"
        />
        <Card
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Bliss Hostel"
          user="Abhay"
          location="Hyderabad"
          description="Great place for a short stay, host is pretty chill guy and consequently the whole place is pretty chilled out. Clean washrooms and clean rooms, a bargain for its location and hygiene."
          price="₹2500"
          rating="3.8"
        />
        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="Kangaroo Hostel"
          user="Sumit"
          location="Bangalore"
          description="The location of the room is amazing. It is very near to the bus stop and is in the city center. It has accessibility to some amazing restaurants and places of interest. It even has a co-working space that helps people traveling for business."
          price="₹6500"
          rating="4.7"
        />
      </div>
    </div>
  );
}

export default Hostels;
