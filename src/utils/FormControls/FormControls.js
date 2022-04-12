import React from "react";
import styles from "./FormControls.module.css";
export const Element =
  (Element) =>
  ({ input, meta, ...props }) => {
    const isError = meta.error && meta.touched;
    return (
      <div
        className={styles.formControls + " " + (isError ? styles.error : "")}
      >
        <Element {...props} {...input}></Element>
        {isError ? (
          <div>
            <br></br>
            <label>{meta.error}</label>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  };
