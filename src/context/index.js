import React, { Component } from "react";

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    stage: 1,
    players: [],
    name: "",
  };

  addPlayerHandler = (name) => {
    this.setState((prevState) => ({
      players: [...prevState.players, name],
    }));
  };
  removePlayerHandler = (id) => {
    let newArray = this.state.players;
    newArray.splice(id, 1);
    this.setState({ players: newArray });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          addPlayer: this.addPlayerHandler,
          removePlayer: this.removePlayerHandler,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { MyContext, MyProvider };
