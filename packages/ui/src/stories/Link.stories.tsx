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
  label: "Link",
};
