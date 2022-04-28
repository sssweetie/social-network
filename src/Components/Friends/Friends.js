import React from "react";
import styles from "./Friends.module.css";
import Paginator from "../Users/Paginator";
import Friend from "./Friend";
function Friends(props) {
  return (
    <div className={styles.grid}>
      <Paginator
        currentPage={props.currentPage}
        totalItemsSize={props.totalUsersSize}
        onPageChanged={props.onPageChanged}
        pageSize={props.pageSize}
      />
      {props.friends.map((friend) => (
        <Friend
          key={friend.id}
          id={friend.id}
          photos={friend.photos}
          followed={friend.followed}
          unfollowThunkCreator={props.unfollowThunkCreator}
          followThunkCreator={props.followThunkCreator}
          isFollowing={props.isFollowing}
          name={friend.name}
          status={friend.status}
        />
      ))}
    </div>
  );
}

export default Friends;
