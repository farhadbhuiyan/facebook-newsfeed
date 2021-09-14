import React, { Component } from "react";
import "./Like.css";

class Like extends Component {
  state = {};
  render() {
    return (
      <div
        className={`button ${
          this.props.isLiked ? "text-primary" : "text-secondary"
        }`}
        onClick={() => this.props.handleLike(this.props.id)}
      >
        <span className="space-after">{this.props.prevLike}</span>
        <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
        <span className="space-before">
          {this.props.isLiked ? "Liked" : "Likes"}
        </span>
      </div>
    );
  }
}

export default Like;
