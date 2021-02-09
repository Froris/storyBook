import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import "./counter.css";

const Counter = ({ byValue }) => {
  const [num, setNum] = useState(0);
  const [value, setValue] = useState(1);

  // Можно передать в useEffect и не подтягивать useCallback
  const addNum = useCallback(() => {
    setNum((prevNum) => prevNum + value);
  }, [byValue]);

  const subtractNum = useCallback(() => {
    setNum((prevNum) => prevNum - value);
  }, [byValue]);

  useEffect(() => {
    console.log("Component did mount");
    return () => {
      console.log("Component will unmount");
    };
  }, []);

  useEffect(() => {
    setValue(byValue);
    console.log("Should component update");
    return () => {
      console.log("Component did update");
    };
  }, [num, byValue]);

  return (
    <div className="clicker">
      <span>{num}</span>
      <button onClick={addNum}>+</button>
      <button onClick={subtractNum}>-</button>
    </div>
  );
};

export default Counter;

Counter.propTypes = {
  byValue: PropTypes.number,
};
