import React from "react";
import MainContent from "./MainContent";
import { CustomArticle } from "../article/Article.stories";
import { ListWithItems } from "../list/List.stories";

export default {
  title: "HOMEWORK/MainContent",
  component: MainContent,
  argTypes: {
    backgroundColor: { control: "color" },
    flexDirection: { control: "text" },
    justifyContent: { control: "text" },
    alignItems: { control: "text" },
  },
};

export const MainWithContent = (args) => (
  <MainContent {...args}>
    <CustomArticle {...CustomArticle.args} />
    <ListWithItems {...ListWithItems.args} />
  </MainContent>
);
