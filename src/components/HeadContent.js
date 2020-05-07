import React from 'react';
import Title  from  './Title'

function HeadContent(props) {
  return (
    <React.Fragment>
    <link href="https://cdn.elluciancloud.com/assets/EDS2/3.0.0/fonts/fonts.css" rel="stylesheet" />
    <Title value={props.title}></Title>
    </React.Fragment>
  );
}




export default HeadContent;
