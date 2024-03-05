import type { Meta, StoryObj } from "@storybook/react";

import { H1 } from "./index";
import { View } from "..";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/title",
  component: H1,
} satisfies Meta<typeof H1>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Secondary: Story = {
  render: () => (
    <View className="!text-center w-full justify-center !bg-[#000]">hey</View>
  ),
};
