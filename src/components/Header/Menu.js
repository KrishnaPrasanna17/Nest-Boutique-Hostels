import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";


function Menu() {
  return (
    <div class="right-menu">
          <button class="menu-button">
            <BsList />
          </button>

          <div class="dropdown-menu">
            <Link to="#" className="Hostel">
              Host your Hostel
            </Link>
            <Link to="#" className="Exp">
              Host your Experience
            </Link>
            <Link to="#" className="Help">
              Help
            </Link>
          </div>
        </div>
  );
}

export default Menu;
