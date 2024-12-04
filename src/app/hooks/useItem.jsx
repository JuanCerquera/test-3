import { ItemContext } from "/src/app/utilities/contexts";
import { useContext } from "react";

export default function useItem() {
  const item = useContext(ItemContext);
  return item;
}
