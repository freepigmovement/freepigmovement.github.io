import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      height: 0,
      width: 0,
    };

    window.addEventListener("resize", this.update);
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  render() {
    return (
      <React.Fragment>
        <p>height: {this.state.height}</p>
        <p>width: {this.state.width}</p>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
