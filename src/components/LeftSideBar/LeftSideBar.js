import React from "react";
import "./LeftSideBar.css";

class LeftSibeBar extends React.Component {
  render() {
    return (
      <div className="left-side-bar d-flex flex-column">
        <div className="left-item">
          <i className="far fa-bookmark"></i>
          <span>Farhad Bhuiyan</span>
        </div>
        <div className="left-item">
          <i className="fas fa-user-friends"></i>
          <span>Friends</span>
        </div>
        <div className="left-item">
          <i className="fas fa-users"></i>
          <span>Groups</span>
        </div>
        <div className="left-item">
          <i className="fab fa-font-awesome-flag"></i>
          <span>Pages</span>
        </div>
        <div className="left-item">
          <i className="fas fa-box-open"></i>
          <span>Marketplace</span>
        </div>
        <div className="left-item">
          <i className="fab fa-youtube"></i>
          <span>Watch</span>
        </div>
      </div>
    );
  }
}

export default LeftSibeBar;
