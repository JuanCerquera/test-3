import useSetTitle from "/src/app/hooks/useSetTitle";
import { FormErrorsContext } from "/src/app/utilities/contexts";
import { getContentElement } from "/src/app/utilities/elements";
import { useEffect } from "react";
import { useActionData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function CreateItem({ itemName, Form }) {
  useSetTitle(`Crear ${itemName}`);

  return <Form method="POST" />;
}
