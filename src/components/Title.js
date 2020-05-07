import React from 'react';

function Title(props) {
  return (
    <title>{ props.value ? props.value : '' } </title>
  );
}

export default Title;
