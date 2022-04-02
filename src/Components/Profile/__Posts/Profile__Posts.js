import React from "react";
import styles from "./Profile__Posts.module.css";
import Profile_Post from "./_Post/Profile_Post";

function Profile__Posts(props) {
  let someSampleItem = React.createRef();

  let profilePostElement = props.postData.map((post) => (
    <Profile_Post
      key={post.id}
      message={post.message}
      likeCount={post.likeCount}
    ></Profile_Post>
  ));

  let onClickAddPost = () => {
    props.onClickAddNewPost();
  };

  let onChangeText = () => {
    props.onChangeMessageText(someSampleItem.current.value);
  };

  return (
    <div className={styles.main}>
      my posts
      <div>
        <textarea
          onChange={onChangeText}
          ref={someSampleItem}
          value={props.postNewText}
        ></textarea>
        <button onClick={onClickAddPost}>Add post</button>
      </div>
      <div className={styles.posts}></div>
      {profilePostElement}
    </div>
  );
}

export default Profile__Posts;
