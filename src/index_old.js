import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import App from './App';

//import PropTypes, { func } from 'prop-types';
//import { EDSApplication, Typography } from '@hedtech/react-design-system/core';
//import Hello from './components/Hello';

import * as serviceWorker from './serviceWorker';
//ReactDOM.render(<App/>,document.getElementById('root'));

/*let model = {myclicks : 0};
function render(){
    ReactDOM.render(<App clicks={model.myclicks} onMyClick={()=>{ model.myclicks += 1; render(); }}/>, document.getElementById('root'));
}
render();*/

/*function Hello(props){
    return <h1>Hello at {props.currentTime}</h1>;
}
ReactDOM.render(<Hello currentTime={new Date().toISOString()} />, document.getElementById('root'));*/

/*function Sum(props){
    return <h1>{props.a} + {props.b} = {props.a + props.b}</h1>;
}*/
/* class Sum extends React.Component {
    render(){
        return <h1>{this.props.a} + {this.props.b} = {this.props.a + this.props.b}</h1>;
    }
}
let sumparams = {a:4, b:2}
ReactDOM.render(<Sum a={4} b= {2}></Sum> , document.getElementById('root')); */

/* class ClickCount extends React.Component {
    constructor(props){
      super(props);
      this.state = {myclicks : 0};
    }
    render() {
        return <div onClick={ () => {this.setState({myclicks : this.state.myclicks+1});}}> 
        This Div has been clicked {this.state.myclicks} times.
        </div>;
    }
}
ReactDOM.render(<ClickCount/> , document.getElementById('root')); */

/*
class DispalyStateValues extends React.Component {
    constructor(props){
        super(props);
        this.state = {a:1, b:2};
    }
    render(){
        return <h1 onClick={()=>{this.setState({b:3,c:4})}}>a = {this.state.a},  b = {this.state.b} , c = {this.state.c} </h1>;
    }
}

ReactDOM.render(<DispalyStateValues ></DispalyStateValues> , document.getElementById('root'));
*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA



/*const App = () => (
    <div>
        <EDSApplication>
            <Typography>Hello World</Typography>
        </EDSApplication>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));*/
/*
function Sum(props) {
    return <h1>{props.a} + {props.b} = {props.a + props.b} </h1>;
}

Sum.propTypes = {
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
};
*/
// type scripting so we will compile time type check rather than runtime.
/*
interface SumProps {
    a: number;
    b: number;
}

function Sum(props: SumProps){
    return <h1>{props.a} + {props.b} = {props.a + props.b} </h1>;
 
}*/

//ReactDOM.render(<Sum a={'a'} b={2}></Sum>, document.getElementById('root'));
// JSX format
/*
function Sum(props){
    return <h1>{props.a} + {props.b} = {props.a + props.b} </h1>
}
ReactDOM.render(<Sum a={4} b={2}></Sum>, document.getElementById('root'));*/
// <Sum {..props}/> which it called as spread attirubutes
function Sum(props){
    return React.createElement('h1',null,props.a, '+', props.b, '=', props.a + props.b );
}

ReactDOM.render(React.createElement('div', null, React.createElement(Sum,{a:4, b:2},null)),document.getElementById('root'));

/** React JSX Event Props 
function Clicked({data}){
return <div>
    <button onClick={(e)=>{data('A');}} >A</button>
    <button onClick={(e)=>{data('B');}} >B</button>
    <button onClick={(e)=>{data('C');}} >C</button>
</div>
}

ReactDOM.render(<Clicked data={(letter)=> {console.log(`${letter} clicked`)}}></Clicked>, document.getElementById('root'));
*/ 
/*var _ = require('lodash');

// React JS data flow ex :
function ClickyButton({numberOfButtons,onSelection}){
    const myButton = v => <button key={v} id={v} onClick={event => onSelection(event.target.id)}> {v} </button> ;

    return <div>
     { _.range(1, numberOfButtons + 1).map(myButton) }    
    </div>
}

ReactDOM.render(<ClickyButton numberOfButtons={5} onSelection={console.log}/>, document.getElementById('root'));
*/


serviceWorker.unregister();
