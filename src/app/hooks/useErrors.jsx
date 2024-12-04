import { FormErrorsContext } from "/src/app/utilities/contexts";
import { useContext } from "react";

export default function useErrors() {
  const errorDict = useContext(FormErrorsContext);
  return errorDict;
}