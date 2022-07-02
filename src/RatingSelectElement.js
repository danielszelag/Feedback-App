import React from 'react';

const RatingSelectElement = (props) => {
  return (
    <li>
      <input
        type="radio"
        id={`num${props.i}`}
        name="rating"
        value={`${props.i}`}
        onChange={props.handleChange}
        checked={props.selected === props.i}
      />
      <label htmlFor={`num${props.i}`}>{props.i}</label>
    </li>
  );
};

export default RatingSelectElement;
