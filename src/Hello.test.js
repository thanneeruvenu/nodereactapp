import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
function Hello(props) {
    return <h1>Hey, time now is {props.now}</h1>;
}

const timeStamp = new Date();
describe("when setting up testing", () => {
    it("should fail", () => {expect(1+1).toBe(2)}); 
}); 


describe("when testing on Hello component", () => {
    let result;
  beforeAll(() => {
      result = Hello({now:timeStamp.toISOString()});
    });
  
  it("retun a value", ()=> {
      expect(result).not.toBeNull();
  });

  it("is a h1", () => {
      expect(result.type).toBe('h1');
  });

  it("has children", () => {
      expect(result.props.children).toBeTruthy();
  });

});

describe("when testing with React Dom", () => {
 it("renders without crashing", () => {
     const div = document.createElement("dev");
     ReactDOM.render(<Hello now={timeStamp.toISOString()}></Hello>,div);
 });
});

Enzyme.configure({adapter: new Adapter()});

describe("when testing with Enzyme", () => {
 it("renders a h1", () => {
 const wrapper = shallow(<Hello now={timeStamp.toISOString()}/>);
 expect(wrapper.find("h1").length).toBe(1);
 });

 it("content check", () => {
    const wrapper = shallow(<Hello now={timeStamp.toISOString()}/>);
    expect(wrapper.contains(<h1>Hey, time now is {timeStamp.toISOString()}</h1>)).toBe(true);
});

});