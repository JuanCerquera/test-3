import { MdDomainAdd, MdOutlineAddLocationAlt, MdOutlinePersonAddAlt } from "react-icons/md";
import LocationCard from "/src/app/components/custom/cards/LocationCard";
import ProfessionalCard from "/src/app/components/custom/cards/ProfessionalCard";
import ServiceCard from "/src/app/components/custom/cards/ServiceCard";
import { FormSection } from "/src/app/components/custom/form/FormComponents";
import CreateButton from "/src/app/components/custom/misc/CreateButton";
import { seekRoute } from "/src/routes/config";

function SettingsSection({ title, items, CardComponent, itemsName, createText, createRoute, createIcon, columns = 3 }) {
  return (
    <FormSection title={title} columns={columns} gapY={10} gapX={10}>
      {items.map(item => (
        <CardComponent key={item.id} {...{ [itemsName]: item }} />
      ))}
      <CreateButton
        text={createText}
        to={seekRoute("settings", createRoute)}
        Icon={createIcon}
      />
    </FormSection>
  );
}

export function LocationsSection({ locations }) {
  return (
    <SettingsSection
      title="Sedes"
      items={locations}
      CardComponent={LocationCard}
      itemsName="location"
      createText="Nueva sede"
      createRoute="newLocation"
      createIcon={MdOutlineAddLocationAlt}
    />
  );
}

export function ProfessionalsSection({ professionals }) {
  return (
    <SettingsSection
      title="Profesionales"
      items={professionals}
      CardComponent={ProfessionalCard}
      itemsName="professional"
      createText="Nuevo profesional"
      createRoute="newProfessional"
      createIcon={MdOutlinePersonAddAlt}
    />
  );
}

export function ServicesSection({ services }) {
  return (
    <SettingsSection
      title="Servicios"
      items={services}
      CardComponent={ServiceCard}
      itemsName="service"
      createText="Nuevo servicio"
      createRoute="newService"
      createIcon={MdDomainAdd}
      columns={2}
    />
  );
}