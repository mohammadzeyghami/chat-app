import { Input as AntInput, InputProps } from "antd";
import { twMerge } from "tailwind-merge";
const Input = ({ className, ...rest }: InputProps) => {
  return (
    <AntInput
      className={twMerge(
        "!bg-[#EAF2FE] !px-[18px] !h-[50px] !text-[16px] !rounded-[20px]",
        className
      )}
      {...rest}
    />
  );
};

export { Input };
