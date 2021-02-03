import React from "react";
import PropTypes from "prop-types";
import "./article.css";

const Article = ({ title, text, titleColor }) => {
  return (
    <div className="article">
      <h2 className="article__title" style={titleColor && { color: titleColor }}>
        {title}
      </h2>
      <span className="article__text">{text}</span>
    </div>
  );
};

export default Article;

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

Article.defaultProps = {
  title: "Article Title",
  text: "random text",
};
