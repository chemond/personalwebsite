import React from 'react';

import './TextArea.css';

const TextArea = (props) => {
  return (<div className="form-group">
    <label htmlFor={props.name} className="form-label">{props.title}</label>
    <textarea className="form-input" id={props.name} name={props.name} value={props.value} onChange={props.handleChange} placeholder={props.placeholder} rows={props.rows} cols={props.cols}/>
  </div>)
}

export default TextArea;
