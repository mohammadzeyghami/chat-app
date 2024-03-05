import { InboxOutlined, SearchOutlined } from "@ant-design/icons";
import { H2, H5, Input, P, View } from "../../..";
import { Divider } from "antd";

const LeftbarMain = () => {
  return (
    <View vertical className="px-[29px] ">
      <View vertical className="gap-[17px]">
        <View className="w-full justify-between items-center">
          {/* must get this from  */}
          <H2 className="!font-semibold">Chats</H2>
          <div className="border-[1px] border-[#000] rounded-full w-[32px] h-[32px] -mt-3" />
        </View>
        <Input
          className="text-primary"
          prefix={<SearchOutlined className="text-6 text-primary" />}
        />
        <View vertical>
          <View className="gap-2 !items-center">
            <InboxOutlined className="text-[24px]" />
            <H5 className="mt-2">Archived</H5>
          </View>
          <Divider className="h-[1px] bg-black !my-2" />
        </View>
      </View>
      <View vertical>
        <H5 className="!font-normal">Pinned</H5>
        <View className="w=full rounded-lg">
          <img />
          <View vertical>
            <H5>name</H5>
            <P>message:hello</P>
          </View>
        </View>
      </View>
    </View>
  );
};

export { LeftbarMain };
