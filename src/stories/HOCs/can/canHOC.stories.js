import React from "react";
import Article from "../../article/Article";
import canHOC from "./canHOC";

export default {
  title: "HOMEWORK-2/canHOC",
  component: canHOC,
  argTypes: {
    isAuth: { control: "boolean" },
    isAdmin: { control: "boolean" },
    isBanned: { control: "boolean" },
  },
};

export const ArticleContainer = (args) => {
  console.log(args);
  const ArticleWithPermissions = canHOC(Article);
  return <ArticleWithPermissions {...args} />;
};
