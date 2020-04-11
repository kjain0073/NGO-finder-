import React from "react";

const CheckBox = props => {
  return (
    <div className="form-group pa2 ">
      <label for={props.name} className="form-label pa2 ">
        {props.title}
      </label>
      <div className="checkbox pa2" >
        {props.options.map(option => {
          return (
            <label key={option} className="checkbox-inline ph3">
              <input
                id={props.name}
                name={props.name}
                onChange={props.handleChange}
                value={option}
                checked={props.selectedOptions.indexOf(option) > -1}
                type="checkbox"
              />
              {option}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default CheckBox;
