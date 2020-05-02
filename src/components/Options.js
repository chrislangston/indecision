import React from "react";
import Option from "./Option";

const Options = (props) => {
  return (
    <div>
      Options Container Component
      <button onClick={props.handleDeleteOptions}>Remove All Items</button>
      <ol>
        {props.options.map((element) => {
          return <Option key={element} optionText={element} />;
        })}
      </ol>
    </div>
  );
};

export default Options;
