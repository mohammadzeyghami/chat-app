import { twMerge } from "tailwind-merge";
import { Typography } from "antd";
import { ParagraphProps } from "antd/es/typography/Paragraph";
import { TitleProps } from "antd/es/typography/Title";

const { Paragraph, Title } = Typography;

const P = ({ children, className, ...rest }: ParagraphProps) => {
  return (
    <Paragraph className={twMerge("text-[12px] ", className)} {...rest}>
      {children}
    </Paragraph>
  );
};

export { P };

const H1 = ({ children, className, ...rest }: TitleProps) => {
  return (
    <Title className={twMerge("text-[18px] text-white", className)} {...rest}>
      {children}
    </Title>
  );
};

export { H1 };

const H2 = ({ children, className, ...rest }: TitleProps) => {
  return (
    <Title
      level={2}
      className={twMerge("md:text-[32px] text-[28px] text-white", className)}
      {...rest}
    >
      {children}
    </Title>
  );
};

export { H2 };

const H3 = ({ children, className, ...rest }: TitleProps) => {
  return (
    <Title
      level={3}
      className={twMerge("text-[14px] text-white", className)}
      {...rest}
    >
      {children}
    </Title>
  );
};

export { H3 };

const H4 = ({ children, className, ...rest }: TitleProps) => {
  return (
    <Title
      level={4}
      className={twMerge("text-[12px] text-white", className)}
      {...rest}
    >
      {children}
    </Title>
  );
};

export { H4 };

const H5 = ({ children, className, ...rest }: TitleProps) => {
  return (
    <Title
      level={5}
      className={twMerge("!text-[16px] text-white", className)}
      {...rest}
    >
      {children}
    </Title>
  );
};

export { H5 };
