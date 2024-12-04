import EditItem, { itemAction } from "/src/app/components/custom/misc/EditItem";
import useGetItemByModel from "/src/app/hooks/useGetItemByModel";
import ServiceForm from "/src/app/pages/forms/ServiceForm";
import { seekRoute } from "/src/routes/config";
import { computeActionResponse } from "/src/app/utilities/helpers";
import { editInstance, executeAxios, processServiceForm } from "/src/app/utilities/submitters";
import { json, redirect } from "react-router-dom";
import { toast } from "react-toastify";

const modelName = "services";

export async function action({ request, params }) {
  const response = await itemAction({ request, params, modelName });
  return computeActionResponse(response, "Servicio editado correctamente")
}

export default function EditService() {
  const service = useGetItemByModel("services");
  return <EditItem itemName="Servicio" item={service} Form={ServiceForm} />;
}
