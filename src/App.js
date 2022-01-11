import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { MyContext } from "./context";
import Stage_1 from "./components/stage_1";
import Stage_2 from "./components/stage_2";

class App extends Component {
  static contextType = MyContext;

  render() {
    return (
      <div className="wrapper">
        <div className="center-wrapper">
          <h1>Who pays the bill ?</h1>
          {this.context.state.stage === 1 ? <Stage_1 /> : <Stage_2 />}
        </div>
      </div>
    );
  }
}

export default App;
