import React from "react";
import styles from "./Profile__Posts.module.css";
import Profile_Post from "./_Post/Profile_Post";
import { reduxForm, Field } from "redux-form";

function Profile__Posts(props) {
  let profilePostElement = props.postData.map((post) => (
    <Profile_Post
      key={post.id}
      message={post.message}
      likeCount={post.likeCount}
    ></Profile_Post>
  ));

  let addPost = (values) => {
    props.onClickAddNewPost(values.postText);
  };
  return (
    <div className={styles.main}>
      my posts
      <ProfilePostsRedux onSubmit={addPost} {...props} />
      <div className={styles.posts}></div>
      {profilePostElement}
    </div>
  );
}

const ProfilePostsForm = (props) => {
  let someSampleItem = React.createRef();

  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="postText"
        component={"textarea"}
        ref={someSampleItem}
        value={props.postNewText}
      ></Field>
      <Field name="addPost" component={"button"}>
        Add post
      </Field>
    </form>
  );
};

const ProfilePostsRedux = reduxForm({ form: "ProfilePosts" })(ProfilePostsForm);

export default Profile__Posts;
