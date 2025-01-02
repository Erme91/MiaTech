import { Component } from "react";

class HelloWorld extends Component {

  text = "Hello to everyone!";
  render () {
    return (
      <>
        <p>{this.text}</p>
      </>
    )
  }
}

export default HelloWorld
