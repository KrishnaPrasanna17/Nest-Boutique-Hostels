import React from "react";
import { Link } from "react-router-dom";
import './Location.css'

function Location() {
  return (
    < div className="location">
        <div className='location__grid'>
       <Link to="/Checkout">
          <div className="location__items">
            <img
              src="https://i1.trekearth.com/photos/5264/india_on_57th_republic_day_.jpg"
              className='loc_pic'
              alt=""
            />
            <figcaption>Mumbai</figcaption>
          </div>
        </Link>
        <Link to="/Checkout">
          <div className="location__items">
            <img
              src="https://cdn.britannica.com/20/189820-050-D650A54D/Red-Fort-Old-Delhi-India.jpg"
              className='loc_pic'
              alt=""
            />
            <figcaption>Delhi</figcaption>
          </div>
        </Link>
        <Link to="/Checkout">
          <div className="location__items">
            <img
              src="https://www.fabhotels.com/blog/wp-content/uploads/2018/10/1000x650-235.jpg"
              className='loc_pic'
              alt=""
            />
            <figcaption>Bangalore</figcaption>
          </div>
        </Link>
        <Link to="/Checkout">
          <div className="location__items">
            <img
              src="https://www.indiaeducation.net/imagesvr_ce/260/Hyderabad.jpg"
              className='loc_pic'
              alt=""
            />
            <figcaption>Hyderabad</figcaption>
          </div>
        </Link>
        <Link to="/Checkout">
          <div className="location__items">
            <img
              src="https://chennaitourism.travel/images/places-to-visit/headers/marina-beach-chennai-tourism-entry-fee-timings-holidays-reviews-header.jpg"
              className='loc_pic'
              alt=""
            />
            <figcaption>Chennai</figcaption>
          </div>
        </Link>
        </div>
        <div className='location__grid'>
        <Link to="/Checkout">
          <div className="location__items">
            <img
              src="https://assets.telegraphindia.com/telegraph/05648444-7dc7-4c71-9a25-656e98a6a0a0.jpg"
              className='loc_pic'
              alt=""
            />
            <figcaption>Kolkata</figcaption>
          </div>
        </Link>
        <Link to="/Checkout">
          <div className="location__items">
            <img
              src="https://www.holidify.com/images/cmsuploads/compressed/h4_20170822181427.PNG"
              className='loc_pic'
              alt=""
            />
            <figcaption>Jaipur</figcaption>
          </div>
        </Link>
        <Link to="/Checkout">
          <div className="location__items">
            <img
              src="https://www.localsamosa.com/wp-content/uploads/2020/01/5c79127ea260f-Bara_Imambara_Attractions.jpg"
              className='loc_pic'
              alt=""
            />
            <figcaption>Lucknow</figcaption>
          </div>
        </Link>
        <Link to="/Checkout">
          <div className="location__items">
            <img
              src="https://i.pinimg.com/originals/cf/28/98/cf2898747a6d6a65170b724b5ee9755f.jpg"
              className='loc_pic'
              alt=""
            />
            <figcaption>Visakhapatnam</figcaption>
          </div>
        </Link>
        <Link to="/Checkout">
          <div className="location__items">
            <img
              src="https://wallpapercave.com/wp/wp8559241.jpg"
              className='loc_pic'
              alt=""
            />
            <figcaption>Srinagar</figcaption>
          </div>
        </Link>
    </div>
    </div>
  );
}

export default Location;
