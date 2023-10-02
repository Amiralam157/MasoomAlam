import React, { Component } from 'react';

import Man from './Man'
// this is class base components
class Person extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {

      name: "Masoom alam",
      age: 22,
    }

  }

  nameChangeHandler() {
    console.log(this.state);
    this.setState({ name: "Amir", age: 25 }, () => {
      console.log(this.state);
    })
  }
  buttonClickHandler = () => {
    console.log(this);
  }
  render() {
    let Person;
    Person = this.state.Person.map((p) => {
      return <Person name={p.name} age={p.age} />
    });
    return (
      <div>
        <h1>
          <i>Dear {this.state.name},currently you are {this.state.age} years old welcome to web development</i>
          <br />
          <button onClick={() => this.nameChangeHandler()}> click me </button>
        </h1>
        <br />
        <button type='button' onClick={this.buttonClickHandler}> Button</button>
        <Man></Man>
      </div>
    );
  }
}




























{/* <div>Name: Masoom Alam</div> */ }
{/* <div>Age: 11 years</div> */ }

{/* <i>Dear {this.props.name},currently you are {this.props.age} old welcome to web development  </i> 
          this is the method used to retrive the data using props
          
          retrive the data using state */}



//binding is of three type we can use call back function or inline binding or use a constructor  
//   this.buttonClickHandler = this.buttonClickHandler.bind(this) this a contructor binding 
// if we use arrow function then there is no need to binding
export default Person;