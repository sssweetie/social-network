import React, { useState } from "react";
import cn from "classnames";
import styles from "./Paginator.module.css";
import { Button } from "@mui/material";
let Paginator = ({
  totalItemsSize,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsSize / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);

  let [portionNumber, setPortionNumber] = useState(1);

  let leftPortion = (portionNumber - 1) * portionSize + 1;

  let rightPortion = portionNumber * portionSize;

  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && (
        <Button
          variant="contained"
          className={styles.backButton}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          back
        </Button>
      )}
      {pages
        .filter((page) => page >= leftPortion && page <= rightPortion)
        .map((page) => {
          return (
            <a
              className={cn(
                { [styles.selectedPage]: currentPage === page },
                styles.pageNumber
              )}
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
        <Button
          variant="contained"
          className={styles.nextButton}
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          next
        </Button>
      )}
    </div>
  );
};

export default Paginator;
