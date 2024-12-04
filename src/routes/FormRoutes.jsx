import { Route } from "react-router-dom";
import CreateProfessional, {
  action as professionalAction,
} from "/src/app/pages/crud/professionals/CreateProfessional";
import CreateService,{
  action as serviceAction,
} from "/src/app/pages/crud/services/CreateService";
import { seekRoute } from "./config";
import CreateLocation, {
  action as createLocationAction,
} from "/src/app/pages/crud/locations/CreateLocation";
import EditLocation, {
  action as editLocationAction,
} from "/src/app/pages/crud/locations/EditLocation";
import EditProfessional, {
  action as editProfessionalAction,
} from "/src/app/pages/crud/professionals/EditProfessional";
import EditService, {
  action as editServiceAction,
} from "/src/app/pages/crud/services/EditService";

export const routes = (
  <>
    <Route
      path={seekRoute("settings", "newLocation")}
      element={<CreateLocation />}
      action={createLocationAction}
    />
    <Route
      path={seekRoute("settings", "newProfessional")}
      element={<CreateProfessional />}
      action={professionalAction}
    />
    <Route
      path={seekRoute("settings", "newService")}
      element={<CreateService />}
      action={serviceAction}
    />
    <Route
      path={seekRoute("settings", "editLocation")}
      element={<EditLocation />}
      action={editLocationAction}
    />
    <Route
      path={seekRoute("settings", "editProfessional")}
      element={<EditProfessional />}
      action={editProfessionalAction}
    />
    <Route
      path={seekRoute("settings", "editService")}
      element={<EditService />}
      action={editServiceAction}
    />
  </>
);
