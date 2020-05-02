class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      options: props.options,
    };
  }

  componentDidMount(){
      console.log('componentDidMount');
  }

  componentDidUpdate(){
      console.log('componentDidUpdate')
  }
  componentWillUnmount(){
      console.log('component will unmount');
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
          handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
    </div>
  );
};

Header.defaultProps = {
    title: 'Indecision App'
};

const Action = (props) => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>
        What Should I Do?
      </button>
    </div>
  );
};

const Options = (props) => {
    return (
        <div>
          Options Container Component
          <button onClick={props.handleDeleteOptions}>
            Remove All Items
          </button>
          <ol>
            {props.options.map((element) => {
              return <Option key={element} optionText={element} />;
            })}
          </ol>
        </div>
      );

};

const Option = (props) => {
    return (
        <div>
        <li key={props.optionText}>{props.optionText}</li>
      </div>
    );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      error: undefined,
    };
  }

  handleAddOption(e) {
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
  }

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

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
