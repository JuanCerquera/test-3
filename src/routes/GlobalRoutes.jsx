import { createRoutesFromElements, Route } from "react-router-dom";
import { routes as guardedRoutes } from "./GuardedRoutes";
import SignUp, {
  action as signUpAction,
  loader as signUpLoader,
} from "/src/app/pages/SignUp.jsx";
import Login, { action as loginAction } from "/src/app/pages/Login";
import Schedule, {
  loader as scheduleLoader,
  action as scheduleAction,
} from "/src/app/pages/Schedule";
import { seekRoute } from "./config";
import Home from "/src/website/pages/Home.jsx";
import PrivacyPolicy from "/src/website/pages/PrivacyPolicy.jsx";
import Account from "/src/app/pages/Account.jsx";

export const routes = createRoutesFromElements(
  <>
    {guardedRoutes}
    <Route path={seekRoute("landingPage")} element={<Home/>}/>
    <Route path={seekRoute("privacyPolicy")} element={<PrivacyPolicy/>}/>
    <Route
      element={<Account/>}
    >
      <Route
        path={seekRoute("signup")}
        element={<SignUp/>}
        action={signUpAction}
        loader={signUpLoader}
      />
      <Route
        path={seekRoute("login")}
        element={<Login/>}
        action={loginAction}
      />
    </Route>
    <Route
      path={seekRoute("schedule")}
      element={<Schedule/>}
      loader={scheduleLoader}
      action={scheduleAction}
    />
  </>,
);
