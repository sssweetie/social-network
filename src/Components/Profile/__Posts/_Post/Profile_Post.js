import React from "react";
import styles from "./Profile_Post.module.css";
function Profile_Post(props) {
  return (
    <div>
      <img
        className={styles.sizeImage}
        src="https://www.hiptoro.com/wp-content/uploads/2020/03/Demon-Slayer-Kimetsu-no-Yaiba-Chapter-200-Release-Date-Spoilers-Death-of-Muzan-as-Giant-Baby-Form-is-Exposed-to-Sun-150x150.jpg"
      ></img>
      <div className={styles.item}>{props.message}</div>
      <span>Like {props.likeCount}</span>
    </div>
  );
}

export default Profile_Post;
