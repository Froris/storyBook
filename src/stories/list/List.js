import React from "react";
import PropTypes from "prop-types";
import "./list.css";

const List = ({ list, color, backgroundColor }) => {
  return (
    <div className="list-container" style={backgroundColor && { backgroundColor }}>
      {list.length < 1 ? (
        <span className="list__empty" style={color && { color }}>
          Empty list!
        </span>
      ) : (
        <ul className="list" style={color && { color }}>
          {list.map((el, i) => (
            <li key={i}>{el.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;

List.propTypes = {
  list: PropTypes.array,
};
