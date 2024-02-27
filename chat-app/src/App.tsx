import "./App.css";
import { BrowserRouter, Route, Routes as Router } from "react-router-dom";
import ThemeProvider from "./components/molecules/providers/theme";
import LangProvider from "./components/molecules/providers/lang";
import { PrivateRoutes } from "./components/pages/privateRoutes";
function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <BrowserRouter>
          <Router>
            <Route
              path={"*"}
              element={
                <PrivateRoutes
                  isAuthenticated={true}
                  userRoles={["user", "admin"]}
                />
              }
            />
            {/* <Route path={Routes.login.root} element={<LogIn />} />
            <Route path={Routes.signIn.root} element={<SignIn />} /> */}
          </Router>
        </BrowserRouter>
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;
