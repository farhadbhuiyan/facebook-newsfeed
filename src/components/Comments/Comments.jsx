import React, { Component } from "react";
import "./Comments.css";

class Comments extends Component {
  state = {};
  render() {
    return (
      <div className="button">
        <i className="fa fa-comment-o" aria-hidden="true"></i>
        <span className="space-before">Comments</span>
      </div>
    );
  }
}

export default Comments;
