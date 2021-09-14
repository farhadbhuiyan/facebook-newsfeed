import React, { Component } from "react";
import Settings from "../settings/settings";
import "./UserInfo.css";

class UserInfo extends Component {
  state = {};
  render() {
    const { id, profilePic, userName, duration, onSetting, setting } =
      this.props;
    return (
      <>
        <div className="post-header d-flex justify-content-center align-items-center justify-content-between ">
          <div className="user-info d-flex align-items-center">
            <img className="profile-pic" src={profilePic} alt="profile pic" />
            <div>
              <h2 className="name">{userName}</h2>
              <div className="post-time-and-privacy d-flex">
                <p className="space-after">{duration}</p>
                <span className="privacy-icon">
                  <i className="fas fa-users"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="">
            <i
              className="modify-post fas fa-ellipsis-h"
              onClick={() => onSetting(id)}
            ></i>
            {setting ? <Settings /> : null}
          </div>
        </div>
      </>
    );
  }
}

export default UserInfo;
