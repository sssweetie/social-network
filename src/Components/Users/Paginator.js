import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./Paginator.module.css";

let Paginator = ({
  currentPage,
  onPageChanged,
  totalItemsSize,
  pageSize,
  portionSize = 5,
}) => {
  let pagesCount = Math.ceil(totalItemsSize / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);

  let { portionNumber, setPortionNumber } = useState(1);

  let leftPortion = (portionNumber - 1) * portionSize + 1;

  let rightPortion = portionNumber * portionSize;

  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          back
        </button>
      )}
      {pages
        .filter((page) => page >= leftPortion && page <= rightPortion)
        .map((page) => {
          return (
            <a
              // className={cn(
              //   { [styles.selectedPage]: currentPage === page },
              //   styles.pageNumber
              // )}
              className={
                currentPage === page
                  ? styles.selectedPage + styles.pageNumber
                  : styles.pageNumber
              }
              key={page}
              onClick={(event) => {
                onPageChanged(page);
              }}
            >
              {page}
            </a>
          );
        })}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          next
        </button>
      )}
    </div>
  );
};

export default Paginator;
