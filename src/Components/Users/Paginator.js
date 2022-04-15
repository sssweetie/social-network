import React from "react";
import styles from "./Users.module.css";
function Paginator({ currentPage, onPageChanged, totalUsersSize, pageSize }) {
  let pagesCount = Math.ceil(totalUsersSize / pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={styles.flexPages}>
      {pages.map((page) => {
        return currentPage + 3 > page ? (
          <a
            key={page}
            className={
              currentPage === page
                ? `${styles.chosenPage} ${styles.page}`
                : `${styles.unChosenPage} + ${styles.page}`
            }
            onClick={() => onPageChanged(page)}
          >
            {page}
          </a>
        ) : (
          <a></a>
        );
      })}
    </div>
  );
}

export default Paginator;
