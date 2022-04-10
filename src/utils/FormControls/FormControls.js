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
        {isError ? <span>{meta.error}</span> : ""}
      </div>
    );
  };
// export const Textarea = ({ input, meta, ...props }) => {
//   const isError = meta.error && meta.touched;
//   return (
//     <div className={styles.formControls + " " + (isError ? styles.error : "")}>
//       <textarea {...props} {...input}></textarea>
//       {isError ? <span>{meta.error}</span> : ""}
//     </div>
//   );
// };

// export const Input = ({ input, meta, ...props }) => {
//   const isError = meta.error && meta.touched;
//   return (
//     <div className={styles.formControls + " " + (isError ? styles.error : "")}>
//       <input {...props} {...input}></input>
//       {isError ? <span>{meta.error}</span> : ""}
//     </div>
//   );
// };
