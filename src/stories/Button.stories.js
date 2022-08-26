import Button from "../components/Button";

export default {
  title: "Action Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const ButtonRed = Template.bind({});
ButtonRed.args = { backgroundColor: "red" };

export const ButtonBlue = Template.bind({});
ButtonBlue.args = { backgroundColor: "blue" };
