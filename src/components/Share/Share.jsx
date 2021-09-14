import React, { Component } from "react";
import "./Share.css";

class Share extends Component {
  state = {};
  render() {
    return (
      <div className="button">
        <i className="fa fa-share" aria-hidden="true"></i>
        <span className="space-before">Share</span>
      </div>
    );
  }
}

export default Share;
