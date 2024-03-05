import { Layout } from "antd";
import { Suspense } from "react";
import Loading from "../../loading";
import { View } from "../../..";

export interface MainDashProps {
  footer?: React.ReactNode;
  leftContent?: React.ReactNode;
  children?: React.ReactNode;
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
  rightBar?: React.ReactNode;
}

const MainLayout = ({
  footer,
  children,
  sidebar,
  leftContent,
  header,
  rightBar,
}: MainDashProps) => {
  return (
    <Layout>
      {sidebar && (
        <View
          vertical
          className="!w-[130px] min-h-[100vh] !bg-sidebar fixed p-4 z-20 "
        >
          {sidebar}
        </View>
      )}
      <Layout className="!flex !flex-col">
        {header && (
          <Layout.Header className="bg-inherit  w-[calc(100vw-130px)] fixed z-10 !ml-[130px] p-4 ">
            {header}
          </Layout.Header>
        )}
        <Layout.Content className="w-full flex-1 min-h-[calc(100vh-110px)]  max-w-[calc(100vw-130px)] !ml-[130px] mt-[60px] ">
          <View>
            {leftContent && (
              <View vertical className="w-[384px] px-6 h-full">
                {leftContent}
              </View>
            )}
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </View>
        </Layout.Content>
        <Layout.Footer className="w-full flex-1">{footer}</Layout.Footer>
      </Layout>
      {rightBar && (
        <Layout.Sider className=" !bg-white min-h-[100vh]  p-4 z-10">
          {rightBar}
        </Layout.Sider>
      )}
    </Layout>
  );
};

export { MainLayout };
