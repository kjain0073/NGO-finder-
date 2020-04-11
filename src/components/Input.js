import React from "react";

const Input = props => {
  //console.log(props.value);
  return (
    <div className="form-group pa2 ">
      <label for={props.name} className="form-label ph3">
        {props.title}
      </label>
      <input
        className="form-control "
        id={props.name}
        name={props.name}
        type={props.inputType}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
