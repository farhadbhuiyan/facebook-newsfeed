import React from "react";
import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="container-fluid nav-bar d-flex justify-content-between align-items-center">
        <div className="left d-flex justify-content-start">
          <i className="fab fa-facebook"></i>
          <form action="">
            <input type="text" placeholder="Search Facebook" />
          </form>
        </div>
        <div className="middle d-flex justify-content-between">
          <span className="active">
            <i className="fas fa-home"></i>
          </span>
          <span>
            <i className="fas fa-user-friends"></i>
          </span>
          <span>
            <i className="fab fa-font-awesome-flag"></i>
          </span>
          <span>
            <i className="fab fa-youtube"></i>
          </span>
          <span>
            <i className="fas fa-users"></i>
          </span>
        </div>
        <div className="right d-flex justify-content-end">
          <span>
            <i className="fas fa-bars"></i>
          </span>
          <span>
            <i className="fab fa-facebook-messenger"></i>
          </span>
          <span>
            <i className="fas fa-bell"></i>
          </span>
          <span>
            <i className="fas fa-sort-down"></i>
          </span>
        </div>
      </div>
    );
  }
}

export default NavBar;
