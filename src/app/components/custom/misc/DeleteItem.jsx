import { Form, useNavigate } from "react-router-dom";
import { TertiaryButton } from "./Buttons";
import useItem from "/src/app/hooks/useItem";
import { seekRoute } from "/src/routes/config";
import { deleteInstance } from "/src/app/utilities/submitters";
import { toast } from "react-toastify";

export default function DeleteItem({ instanceId, modelName, message }) {
  const navigate = useNavigate();
  async function deleteItem() {
    console.log(instanceId);
    const response = await deleteInstance({
      modelName,
      instanceId,
    });
    toast.success(message);
    navigate(seekRoute("settings"));
  }

  return <TertiaryButton onButtonClick={deleteItem}>Eliminar</TertiaryButton>;
}
