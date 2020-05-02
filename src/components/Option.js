import React from 'react';

const Option = (props) => {
    return (
        <div>
        <li key={props.optionText}>{props.optionText}</li>
      </div>
    );
};

export default Option;

