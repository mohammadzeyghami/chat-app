import { Button as AntButton, ButtonProps } from "antd";
const ButtonPrimary = ({ ...rest }: ButtonProps) => {
  return <AntButton {...rest} />;
};

export { ButtonPrimary };
