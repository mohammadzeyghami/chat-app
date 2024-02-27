import { Navigate, Route, Routes as Router } from "react-router-dom";
import Routes from "../../routes";
import { MainLayout } from "../../sections";

//lazy loading

// const DashboardRoutes = lazy(
//   () => import("../../../pages/dashboard/root/index")
// );

// const OverviewMain = lazy(
//   () => import("../../../pages/dashboard/overview/main")
// );
// const PostsRoutes = lazy(() => import("../../../pages/dashboard/posts/main"));
// const ProductRoutes = lazy(
//   () => import("../../../pages/dashboard/products/main")
// );
// const UsersRoots = lazy(() => import("../../../pages/dashboard/users/root"));

//componenets

interface MyPrivateprops {
  isAuthenticated: boolean;
  userRoles: string[];
}
const PrivateRoutes = ({
  isAuthenticated = true,
  userRoles,
}: MyPrivateprops) => {
  if (isAuthenticated) {
    console.log(userRoles);
    return (
      <Router>
        {/* <Navigate to={"*"} replace /> */}
        <Route
          path={"/*"}
          element={
            <MainLayout
              header={<div>navbar</div>}
              sidebar={<div>sidebar</div>}
              rightBar={<div className="bg-black">rightbar</div>}
            >
              <div className="w-[80vw] bg-blue !text-black">homePage</div>
            </MainLayout>
          }
        />
      </Router>
    );
  } else {
    return <Navigate to={Routes.login.root} />;
  }
};

export { PrivateRoutes };
