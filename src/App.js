import React, {Component, useContext} from 'react';
//import './App.css';
import {sampleJson} from './resource/Test1';



/*class App extends Component  {
render(){
  return (
    <div> {sampleJson().name} </div>
  );
}
}*/

function App() {
  return (
    <div> Hello {sampleJson.name} </div>
  );
}

export default App;
