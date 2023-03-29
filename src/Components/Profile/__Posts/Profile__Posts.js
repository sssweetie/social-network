import React from 'react';

import { reduxForm, Field } from 'redux-form';

import {
  maxLengthCreator,
  requiredField,
} from '../../../utils/Validators/validators';
import { Element } from '../../../utils/FormControls/FormControls';

import Profile_Post from './_Post/Profile_Post';
import styles from './Profile__Posts.module.css';

const Textarea = Element('textarea');
const maxLength = maxLengthCreator(10);
function Profile__Posts(props) {
  const profilePostElement = props.postData.map((post) => (
    <Profile_Post
      key={post.id}
      message={post.message}
      likeCount={post.likeCount}
    ></Profile_Post>
  ));

  const addPost = (values) => {
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
  const someSampleItem = React.createRef();

  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="postText"
        component={Textarea}
        ref={someSampleItem}
        value={props.postNewText}
        validate={[requiredField, maxLength]}
      ></Field>
      <Field name="addPost" component={'button'}>
        Add post
      </Field>
    </form>
  );
};

const ProfilePostsRedux = reduxForm({ form: 'ProfilePosts' })(ProfilePostsForm);

export default Profile__Posts;
