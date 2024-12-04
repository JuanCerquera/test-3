import EditItem, { itemAction } from "/src/app/components/custom/misc/EditItem";
import useGetItemByModel from "/src/app/hooks/useGetItemByModel";
import ProfessionalForm from "/src/app/pages/forms/ProfessionalForm";
import { seekRoute } from "/src/routes/config";
import { computeActionResponse } from "/src/app/utilities/helpers";
import { editInstance } from "/src/app/utilities/submitters";
import { json, redirect } from "react-router-dom";
import { toast } from "react-toastify";

const modelName = "professionals";

export async function action({ request, params }) {
  const response = await itemAction({ request, params, modelName });
  return computeActionResponse(response, "Profesional editado correctamente")
}

export default function EditProfessional() {
  const professional = useGetItemByModel("professionals");
  return (
    <EditItem
      itemName="Profesional"
      item={professional}
      Form={ProfessionalForm}
    />
  );
}
