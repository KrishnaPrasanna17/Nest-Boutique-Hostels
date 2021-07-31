import React from "react";
import Banner from "./../Banner/Banner";
import Interests from "./../Interest/Interests";
import Footer from "./../Footer/Footer";
import Experiences from "./../Experience/Experiences";
import Location from "./../Location/Location";
import Trial from "./../Trial/Trial";

function Home() {
  return (
    <div className="home">
      <Trial />
      {/* <Interests/> */}
      <Banner />
      <Location />
      <Experiences />
      <Footer />
    </div>
  );
}

export default Home;
