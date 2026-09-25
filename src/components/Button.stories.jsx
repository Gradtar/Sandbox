import { Button } from "./Button";
import "./Button.css";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "Primary call-to-action button, sourced from the Figma 'Testing' file. Shares one structure across brands; only the brand tokens (background color, corner radius) change.",
      },
    },
  },
  argTypes: {
    brand: { control: "radio", options: ["a", "b"] },
  },
};

export const BrandA = {
  args: { brand: "a", children: "Shop now" },
  parameters: {
    docs: { description: { story: "Brand A: solid blue fill, 8px soft corners." } },
  },
};

export const BrandB = {
  args: { brand: "b", children: "Shop now" },
  parameters: {
    docs: { description: { story: "Brand B: purple fill, fully rounded pill shape." } },
  },
};
