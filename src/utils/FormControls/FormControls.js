import React from 'react';
import { Field } from 'redux-form';

import styles from './FormControls.module.css';
export const Element =
  (Element) =>
    ({ input, meta, ...props }) => {
      const isError = meta.error && meta.touched;
      return (
        <div
          className={styles.formControls + ' ' + (isError ? styles.error : '')}
        >
          <Element {...props} {...input}></Element>
          {isError ? (
            <div>
              <br></br>
              <label>{meta.error}</label>
            </div>
          ) : (
            ''
          )}
        </div>
      );
    };

export const createField = (
  placeholder,
  component,
  validate,
  name,
  type,
  className
) => {
  return (
    <Field
      placeholder={placeholder}
      component={component}
      validate={validate}
      name={name}
      type={type}
      className={className}
    ></Field>
  );
};
