import React from "react";

import { Link } from "../components/link/Link";

export default {
  title: "Components/Link",
  component: Link,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => {
  return (
    <Link href="https://google.com" {...args}>
      Link
    </Link>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const OpenInAnotherTab = Template.bind({});
OpenInAnotherTab.args = {
  openNewTab: true,
};
