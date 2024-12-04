import { fetchModelWithFilters } from "/src/app/utilities/fetchers";
import { Form } from "react-router-dom";
import { useState } from "react";
import ServiceGroup from "./ServiceGroup";
import LocationGroup from "./LocationGroup";
import ProfessionalGroup from "./ProfessionalGroup";
import DateForm from "./DateForm";
import AdditionalInfoForm from "./AdditionalInfoForm";
import CustomerForm from "./CustomerForm";
import { FormSubmitButton } from "/src/app/components/custom/form/FormComponents";
import ValidatedForm from "/src/app/components/custom/form/ValidatedForm.jsx";

export default function ScheduleForm({ services }) {
  const [serviceId, setServiceId] = useState(null);
  const [professionalId, setProfessionalId] = useState(null);

  return (
    <div id="main" className="w-full">
      <ValidatedForm
        className="flex gap-4 lg:gap-10 flex-col mb-10"
        method="post"
        noValidate
        id="schedule-form"
        encType="multipart/form-data"
      >
        <MainForm
          services={services}
          serviceId={serviceId}
          setServiceId={setServiceId}
          setProfessionalId={setProfessionalId}
        />
        <DateForm professionalId={professionalId} serviceId={serviceId}/>
        <AdditionalInfoForm serviceId={serviceId} />
        <CustomerForm />
        {/* <button type="submit">Agendar cita</button> */}
        <FormSubmitButton color="#6366F1">Agendar cita</FormSubmitButton>
      </ValidatedForm>
    </div>
  );
}

function MainForm({ services, serviceId, setServiceId, setProfessionalId }) {
  const [locationId, setLocationId] = useState(null);

  return (
    <div className="schedule-section-card">
      <h2 className="subtitle">Selecciona el servicio que deseas agendar</h2>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-3">
          <ServiceGroup services={services} setServiceId={setServiceId} />
          <LocationGroup serviceId={serviceId} setLocationId={setLocationId} />
          <ProfessionalGroup
            serviceId={serviceId}
            locationId={locationId}
            setProfessionalId={setProfessionalId}
          />
        </div>
        <div className="invisible" id="info-div">
          <p id="service_description"></p>
        </div>
      </div>
    </div>
  );
}
