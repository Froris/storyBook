import React from "react";
import Article from "./Article";

export default {
  title: "HOMEWORK/Article",
  component: Article,
  argTypes: {
    titleColor: { control: "color" },
  },
};

const Template = (args) => <Article {...args} />;

export const CustomArticle = Template.bind({});
CustomArticle.args = {
  title: "My title",
  text: "Some user text ",
};
