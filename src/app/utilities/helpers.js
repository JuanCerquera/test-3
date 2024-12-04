import { seekRoute } from "/src/routes/config";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export function computeActionResponse(response, successMessage, redirectRoute = "settings",params = null) {
  console.log("La respuesta es");
  console.log(response);
  console.log("params desde compute", params);
  const responseIsOk = response.status - 200 < 100;
  if (responseIsOk) {
    toast.success(successMessage);
    return redirect(seekRoute(redirectRoute,undefined,params));
  } else {
    console.log("Evaluando error");
    console.log(response);
    const errorDict = response.data;

    return errorDict;
  }
}