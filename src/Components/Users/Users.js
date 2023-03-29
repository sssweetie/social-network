import React from 'react';

import styles from './Users.module.css';
import Paginator from './Paginator';
import User from './User';
function Users(props) {
  return (
    <div className={styles.grid}>
      <Paginator
        currentPage={props.currentPage}
        totalItemsSize={props.totalUsersSize}
        onPageChanged={props.onPageChanged}
        pageSize={props.pageSize}
      />
      {props.users.map((user) => (
        <User
          key={user.id}
          id={user.id}
          photos={user.photos}
          followed={user.followed}
          unfollowThunkCreator={props.unfollowThunkCreator}
          followThunkCreator={props.followThunkCreator}
          isFollowing={props.isFollowing}
          name={user.name}
          status={user.status}
        />
      ))}
    </div>
  );
}

export default Users;
