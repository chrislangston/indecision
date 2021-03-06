import React from "react";

export default class AddOption extends React.Component {
  state = {
    error: undefined,
  };

  handleAddOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    const error = this.props.handleAddOption(option);

    if (error) {
      console.log(error);

      this.setState(() => {
        return {
          error: error,
        };
      });
    } else {
      this.setState(() => {
        return {
          error: undefined,
        };
      });
      e.target.elements.option.value = "";
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
