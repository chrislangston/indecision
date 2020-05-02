import React from "react";
import Header from "./Header";
import AddOption from "./AddOption";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  handleClearSelectedOption = () => {
    console.log("handleOptionSelection was called on IndecisionApp");

    this.setState(() => {
      return {
        selectedOption: undefined,
      };
    });
  };

  handleAddOption = (option) => {
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
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];

    this.setState(() => {
      return {
        selectedOption: option,
      };
    });
  };

  handleDeleteOptions = () => {
    console.log("handleDeleteOptions in Root Component");
    this.setState(() => {
      return {
        options: [],
      };
    });
  };

  componentDidMount() {
    console.log("componentDidMount");

    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({
          options,
        }));
      }
    } catch (error) {}
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");

    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("component will unmount");
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
        <OptionModal
          handleClearSelectedOption={this.handleClearSelectedOption}
          selectedOption={this.state.selectedOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: [],
};
