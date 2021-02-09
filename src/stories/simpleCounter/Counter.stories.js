import React from "react";
import Counter from "./Counter";

export default {
  title: "HOMEWORK-2/Counter",
  component: Counter,
  argTypes: {
    byValue: { control: "number" },
  },
};

export const AddProvidedValue = (args) => <Counter {...args} />;
