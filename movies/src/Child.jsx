import React from "react";

class Child extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor called");
    this.state = {
        on:false,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

 componentDidUpdate(){
     console.log("component did update");
 }

 
 componentWillUnmount() {
  console.log("component will unmount called ");
}


  render() {
    console.log("render");
    return (
      <div>
        <button
          onClick={() => {
            if (this.state.on) {
              this.setState({ on: false });
            } else {
              this.setState({ on: true });
            }
          }}
        >
          click
        </button>
      </div>
    );
  }
}

export default Child;
