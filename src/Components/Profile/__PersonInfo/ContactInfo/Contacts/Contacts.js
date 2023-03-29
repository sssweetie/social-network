import React from 'react';

function Contacts(props) {
  return (
    <div>
      {props.contactTitle}: {props.contactValue}
    </div>
  );
}

export default Contacts;
