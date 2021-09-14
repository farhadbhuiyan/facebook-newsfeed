import React from "react";
import "./settings.css";

class Settings extends React.Component {
  render() {
    return (
      <div className="settings d-flex flex-column">
        <div className="setting-item">
          <i className="far fa-bookmark"></i>
          <span>Save Post</span>
        </div>
        <div className="setting-item">
          <i className="far fa-bell"></i>
          <span>Turn on notification for this post</span>
        </div>
        <div className="setting-item">
          <i className="far fa-times-circle"></i>
          <span>Hide post</span>
        </div>
        <div className="setting-item">
          <i className="fas fa-exclamation-circle"></i>
          <span>Find support or report</span>
        </div>
      </div>
    );
  }
}

export default Settings;
