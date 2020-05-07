import React from 'react';

function GroupComp(props) {
  return (
    props.childern ?  React.cloneElement(props.childern) : null
  );
}

export default GroupComp;
