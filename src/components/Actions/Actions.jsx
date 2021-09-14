import { Component } from "react";
import Comments from "../Comments/Comments";
import Like from "../Like/Like";
import Share from "../Share/Share";
import "./Actions.css";

class Actions extends Component {
  state = {};
  render() {
    return (
      <div className="post-bottom d-flex justify-content-between">
        <Like
          id={this.props.id}
          handleLike={this.props.handleLike}
          isLiked={this.props.isLiked}
          prevLike={this.props.prevLike}
        />
        <Comments />
        <Share />
      </div>
    );
  }
}

export default Actions;
