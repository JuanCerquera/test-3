import useSetTitle from "/src/app/hooks/useSetTitle";
import { useContext } from "react";
import { SettingsContext } from "/src/app/utilities/contexts";
import {
  LocationsSection,
  ProfessionalsSection,
  ServicesSection,
} from "/src/app/components/custom/layout/SettingsSections";

export default function Settings() {
  useSetTitle("Configuración");
  const { locations, professionals, services } = useContext(SettingsContext);
  return (
    <div>
      <ServicesSection services={services} />
      <LocationsSection locations={locations} />
      <ProfessionalsSection professionals={professionals} />
    </div>
  );
}
