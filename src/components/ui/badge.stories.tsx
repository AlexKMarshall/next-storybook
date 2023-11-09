import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";

import { Badge } from "./badge";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: "My badge",
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    ...Default.args,
    variant: "secondary",
  },
};

export const Clickable: Story = {
  args: {
    ...Default.args,
  },
  render: function Render(args) {
    const [{ variant }, updateArgs] = useArgs();

    function onClick() {
      updateArgs({ variant: variant === "default" ? "secondary" : "default" });
    }
    return <Badge {...args} variant={variant} onClick={onClick} />;
  },
};
