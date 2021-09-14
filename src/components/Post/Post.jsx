import React, { Component } from "react";
import Actions from "../Actions/Actions";
import PostContent from "../PostContent/PostContent";
import UserInfo from "../UserInfo/UserInfo";
import "./Post.css";

class Post extends Component {
  state = {};
  render() {
    const {
      id,
      profilePic,
      userName,
      duration,
      onSetting,
      setting,
      postContent,
      handleLike,
      isLiked,
      prevLike,
    } = this.props;
    return (
      <div className="container post-container">
        <UserInfo
          id={id}
          profilePic={profilePic}
          userName={userName}
          duration={duration}
          onSetting={onSetting}
          setting={setting}
        />
        <PostContent postContent={postContent} />
        <Actions
          id={id}
          handleLike={handleLike}
          isLiked={isLiked}
          prevLike={prevLike}
        />
      </div>
    );
  }
}

export default Post;
