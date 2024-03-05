import { Switch } from "antd";
import { View } from "../../..";
import { SidebarItem } from "../../../molecules/sidebar";
import { MessageOutlined } from "@ant-design/icons";

const SidebarMain = () => {
  const SidebarData = [
    <View className="rounded-lg !bg-[#5B96F7] w-[48px] h-[48px] items-center justify-center">
      <MessageOutlined size={50} className="!text-[24px] " />
    </View>,
    <MessageOutlined size={50} className="!text-[24px]" />,
    <MessageOutlined size={50} className="!text-[24px]" />,
    <MessageOutlined size={50} className="!text-[24px]" />,
  ];
  return (
    <View vertical className="justify-between h-[calc(100vh-40px)] ">
      <View vertical className="gap-12 items-center">
        {/* portfolio */}
        <View className="w-[64px] h-[64px] bg-[#AFBBF7] items-center justify-center rounded-lg">
          <SidebarItem
            icon={<MessageOutlined size={50} className="!text-[24px] -mr-2" />}
          />
        </View>
        {/* sidebar Item */}
        {SidebarData.map((item) => item)}
      </View>
      <View vertical gap={7} className="items-center">
        <Switch className="switch w-[50px]" />
        <div className="w-[48px] h-[48px] rounded-full bg-black"></div>
      </View>
    </View>
  );
};

export { SidebarMain };
