import React from "react";
import Article from "../../article/Article";
import ErrorHandlerHOC from "./ErrorHandlerHOC";

export default {
  title: "HOMEWORK-2/ErrorHandlerHOC",
  component: ErrorHandlerHOC,
};

export const ArticleContainer = (args) => {
  return (
    <ErrorHandlerHOC {...args}>
      <Article />
    </ErrorHandlerHOC>
  );
};

export const WithChildrenError = (args) => {
  const ErrorArticle = () => {};

  return (
    <ErrorHandlerHOC {...args}>
      <ErrorArticle />
    </ErrorHandlerHOC>
  );
};

export const WithEmptyErrorHandler = (args) => <ErrorHandlerHOC {...args}></ErrorHandlerHOC>;
