import { Component } from "react";
import { getPosts } from "../../services/postData";
import Post from "../Post/Post";

class NewsFeed extends Component {
  state = {
    posts: getPosts(),
  };

  handleLike = (id) => {
    const posts = this.state.posts.map((post, index) => {
      if (post.postId === id) {
        post.isLiked = !post.isLiked;

        if (post.isLiked) {
          post.prevLike += 1;
        } else {
          post.prevLike -= 1;
        }
      }
      return post;
    });

    this.setState({ posts });
  };

  handleSettings = (id) => {
    const { posts } = this.state;
    posts.forEach((post) => {
      if (post.postId === id) {
        post.isSetting = !post.isSetting;
      } else {
        post.isSetting = false;
      }
    });
    this.setState({ posts });
  };

  render() {
    return (
      <>
        {this.state.posts.map((post) => (
          <Post
            key={post.postId}
            id={post.postId}
            duration={post.duration}
            profilePic={post.imageSrc}
            userName={post.userName}
            postContent={post.postContent}
            handleLike={this.handleLike}
            isLiked={post.isLiked}
            prevLike={post.prevLike}
            onSetting={this.handleSettings}
            setting={post.isSetting}
          />
        ))}
      </>
    );
  }
}

export default NewsFeed;
