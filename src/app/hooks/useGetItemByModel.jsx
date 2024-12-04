import { SettingsContext } from "/src/app/utilities/contexts";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export default function useGetItemByModel(modelName) {
  const { id } = useParams();
  const contextValue = useContext(SettingsContext);
  const itemsBunch = contextValue[modelName];

  const selectedItem = itemsBunch.find((item) => item.id == id);
  return selectedItem;
}
