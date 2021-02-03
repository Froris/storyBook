import React from "react";
import PropTypes from "prop-types";
import "./main.css";

const MainContent = ({ children, backgroundColor, flexDirection, justifyContent, alignItems }) => {
  return (
    <div className="main" style={{ backgroundColor, flexDirection, justifyContent, alignItems }}>
      {children}
    </div>
  );
};

export default MainContent;

MainContent.propTypes = {
  backgroundColor: PropTypes.string,
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
};
