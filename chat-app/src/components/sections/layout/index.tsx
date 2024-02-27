import { Layout } from "antd";
import { Suspense } from "react";
import Loading from "../loading";

export interface MainDashProps {
  footer?: React.ReactNode;
  children?: React.ReactNode;
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
  rightBar?: React.ReactNode;
}

const MainLayout = ({
  footer,
  children,
  sidebar,
  header,
  rightBar,
}: MainDashProps) => {
  return (
    <Layout>
      <Layout.Sider className="!bg-white min-h-[100vh] fixed p-4 z-10 ">
        {sidebar}
      </Layout.Sider>
      <Layout className="!flex !flex-col">
        <Layout.Header className="bg-inherit w-[calc(100vw-360px)] fixed z-10 mx-auto p-4 ">
          {" "}
          {header}
        </Layout.Header>
        <Layout.Content className="w-full flex-1 min-h-[calc(100vh-120px)] mt-[60px] ">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </Layout.Content>
        <Layout.Footer className="w-full flex-1">{footer}</Layout.Footer>
      </Layout>
      <Layout.Sider className=" !bg-white min-h-[100vh]  p-4 z-10">
        {rightBar}
      </Layout.Sider>
    </Layout>
  );
};

export { MainLayout };
