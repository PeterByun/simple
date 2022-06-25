import React, { useCallback, useState } from "react";

import { Button } from "../components/button/Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = useCallback(() => {
    setClickCount(clickCount + 1);
  }, [clickCount]);

  return (
    <>
      <Button {...args} onClick={handleClick}>
        Button
      </Button>

      <h1>You have clicked the button {clickCount} times</h1>
    </>
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

export const Large = Template.bind({});
Large.args = {
  size: "lg",
};

export const Circle = Template.bind({});
Circle.args = {
  shape: "circle",
};
