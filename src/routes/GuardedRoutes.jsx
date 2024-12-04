import GuardedRoute from "/src/app/components/router/GuardedRoute";
import { Route } from "react-router-dom";
import { routes as formRoutes } from "./FormRoutes";
import Root from "/src/app/pages/Root";
import Dashboard, {
  protectedLoader as dashboardLoader,
} from "/src/app/pages/Dashboard";
import AppointmentList, {
  loader as appointmentListLoader,
} from "/src/app/pages/AppointmentList";
import Settings from "/src/app/pages/Settings";
import History, { protectedLoader as historyLoader } from "/src/app/pages/History";
import Profile from "/src/app/pages/Profile";
import { protectedLoader as rootLoader } from "/src/app/pages/Root";
import { action as changePasswordAction } from "/src/app/pages/forms/ChangePasswordForm";
import { seekRoute } from "./config";
import { Payments } from "/src/app/pages/Payments.jsx";
import { action as profileAction } from "/src/app/pages/forms/ProfileForm";

export const routes = (
  <Route element={<GuardedRoute />}>
    <Route
      path={seekRoute("root")}
      element={<Root />}
      loader={rootLoader}
      id="root"
    >
      <Route index element={<Dashboard />} loader={dashboardLoader} />
      <Route
        path={seekRoute("appointmentList")}
        element={<AppointmentList />}
        loader={appointmentListLoader}
      />
      <Route path={seekRoute("settings")} element={<Settings />} />
      <Route
        path={seekRoute("history")}
        element={<History />}
        loader={historyLoader}
      />
      <Route path={seekRoute("payments")} element={<Payments />} />
      <Route
        path={seekRoute("profile")}
        element={<Profile />}
        action={profileAction}
      />
      <Route path={seekRoute("changePassword")} action={changePasswordAction} />
      {formRoutes}
    </Route>
  </Route>
);
