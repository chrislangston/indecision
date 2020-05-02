import React from "react";
import Header from "./Header";
import AddOption from "./AddOption";
import Action from "./Action";
import Options from "./Options";

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      options: props.options,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }

  handleAddOption(option) {
    console.log("handleAddOption");

    if (!option) {
      return "Option was empty";
    }
    if (this.state.options.indexOf(option) > -1) {
      return "Option already exists";
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option),
      };
    });
  }

  handlePick() {
    console.log("handlePickCalled");

    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleDeleteOptions() {
    console.log("handleDeleteOptions in Root Component");
    this.setState(() => {
      return {
        options: [],
      };
    });
  }

  render() {
    const title = "Indecision App";
    const subTitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action
          hasOptions={this.state.options.length > 0 ? true : false}
          handlePick={this.handlePick}
        />
        <Options
          handleDeleteOptions={this.handleDeleteOptions}
          options={this.state.options}
        />
        <AddOption
          hasOptions={this.state.options.length > 0 ? true : false}
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: [],
};
