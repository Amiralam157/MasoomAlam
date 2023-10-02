import React, { Component } from "react";
// import Func from "./Func";
class Person extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            Person: [
                {
                    name: "Masoom Alam",
                    age: 22
                },
                {
                    name: "Alam",
                    age: 25
                },
                {
                    name: "Masoom",
                    age: 21
                },
                {
                    name: "Amir",
                    age: 23
                }
            ],
        }
    }
    nameChangeHandler() {
        console.log(this.state);
        this.setState({ name: "Amir Alam", age: 21 }, () => {
            console.log(this.state);
        })
    }
    render() {
        return (
            <div>
                {/* <h1>Hello I am {this.state.name} my age is {this.state.age}</h1> */}
                <h1>Hello I am {this.state.name} my age is {this.state.age}</h1>
                {/* <br /> */}
                {/* <button onClick={() => this.nameChangeHandler()}>click me</button> */}
                {/* <Func></Func> */}

            </div>
        )
    }
}

export default Person;