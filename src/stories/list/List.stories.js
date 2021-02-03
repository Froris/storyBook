import React from "react";
import List from "./List";

export default {
  title: "HOMEWORK/List",
  component: List,
  argTypes: {
    color: { control: "color" },
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <List {...args} />;

export const EmptyList = Template.bind({});
EmptyList.args = {
  list: [],
};
export const ListWithItems = Template.bind({});
ListWithItems.args = {
  list: [{ text: "item 1" }, { text: "item 2" }, { text: "item 3" }, { text: "item 4" }],
};
