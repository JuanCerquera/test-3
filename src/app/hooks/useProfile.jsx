import { useContext } from "react";
import { ProfileContext } from "/src/app/utilities/contexts";

export default function useProfile() {
  const profile = useContext(ProfileContext);
  return profile;
}