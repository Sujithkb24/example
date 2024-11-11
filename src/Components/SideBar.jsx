import React from "react";
import'/public/SideBar.css'
const SideBar = ({ isOpen, toggleSidebar }) => {
    return (
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          &times; {/* Close button (×) */}
        </button>
        <ul className="sidebar-links">
          <li><a href="#">Shop</a></li>
          <li><a href="#">Items</a></li>
          <li><a href="#">Contacts</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </div>
    );
  };
  

export default SideBar;