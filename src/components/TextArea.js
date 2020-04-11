import React from "react";

const TextArea = props => (
  <div className="form-group pa2">
    <label className="form-label ph3">{props.title}</label>
    <textarea
      className="form-control"
      name={props.name}
      rows={props.rows}
      cols={props.cols}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
    />
  </div>
);

export default TextArea;
