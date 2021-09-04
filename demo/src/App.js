import React from "react";
import "./App.css";
import List from "./List";
import Input from "./Input";

class App extends React.Component {
  state = {
    tasks: ["make coffe", "go to gym", "sleep"],
    currInput: "",
  };

  handleCurrInput = (value) => {
    this.setState({ currInput: value });
  };

  handleTask = () => {
    this.setState({
      tasks: [...this.state.tasks, this.state.currInput],
      currInput: "",
    });
  };

  deleteTask = (singleTask) => {
    let currTaskArr = this.state.tasks;

    let filterArr = currTaskArr.filter((element) => {
      return element !== singleTask;
    });

    this.setState({ tasks: filterArr });
  };

  render = () => {
    return (
      <div>
        <h1>note-me</h1>
        <Input
          handleCurrInput={this.handleCurrInput}
          handleTask={this.handleTask}
          currInput={this.state.currInput}
        />
        <List
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          
        />
      </div>
    );
  };
}

export default App;
