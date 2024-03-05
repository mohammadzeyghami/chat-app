import { View } from "../..";
import { H4 } from "../../atoms/typography";
interface ISidebarMain {
  icon?: React.ReactNode;
  title?: string;
}

const SidebarItem = ({ icon, title }: ISidebarMain) => {
  return (
    <View className="gap-2 items-center w-[48px] h-[48px] justify-center">
      {icon} <H4>{title}</H4>
    </View>
  );
};

export { SidebarItem };
