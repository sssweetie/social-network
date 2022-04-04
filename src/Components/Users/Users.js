import React, { Component } from "react";
import styles from "./Users.module.css";
import * as axios from "axios";
import avatar from "./avatar.jpeg";
export class Users extends Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        return (
          this.props.setUsers(response.data.items),
          this.props.setTotalUsers(response.data.totalCount)
        );
      });
  }
  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => this.props.setUsers(response.data.items));
  };
  render() {
    let pagesCount = Math.ceil(this.props.totalUsersSize / this.props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div className={styles.grid}>
        <div>
          {pages.map((page) => {
            return (
              <a
                key={page}
                className={
                  this.props.currentPage === page
                    ? styles.chosenPage
                    : styles.unChosenPage
                }
                onClick={() => this.onPageChanged(page)}
              >
                {page}
              </a>
            );
          })}
        </div>
        {this.props.users.map((user) => (
          <div key={user.id} className={styles.users}>
            <div className={styles.avatarName}>
              <img
                className={styles.avatar}
                src={user.photos.small != null ? user.photos.small : avatar}
              ></img>
            </div>
            <div className={styles.status}>
              <div className={styles.name}>{user.name}</div>
              <div className={styles.description}>{user.status}</div>
              <div className={styles.location}>
                {"user.location.country"}, {"user.location.city"}
              </div>
            </div>
            <div className={styles.gridButton}>
              {user.followed ? (
                <button onClick={() => this.props.onToggleFollow(user.id)}>
                  FOLLOWED
                </button>
              ) : (
                <button onClick={() => this.props.onToggleFollow(user.id)}>
                  UNFOLLOWED
                </button>
              )}
            </div>
          </div>
        ))}
        {/* <div className={styles.getUsers}>
          <button onClick={this.getUsers}>Get users</button>
        </div> */}
      </div>
    );
  }
}

export default Users;
