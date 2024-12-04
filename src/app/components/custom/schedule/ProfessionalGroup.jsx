import { useFetchProfessionals } from "/src/app/hooks/scheduleHooks";
import EmptyItemsContainer from "./EmptyItemsContainer";
import Image from "/src/app/components/custom/misc/Image";
import FieldError from "/src/app/components/custom/form/FieldError.jsx";

export default function ProfessionalGroup({
                                            serviceId,
                                            locationId,
                                            setProfessionalId,
                                          }) {
  return (
    <div className="flex flex-col" id="professionals-container">
      <label className="schedule-label"> Selecciona un profesional: </label>
      {locationId ? (
        <AlreadySelectedDisplay
          serviceId={serviceId}
          locationId={locationId}
          setProfessionalId={setProfessionalId}
        />
      ) : (
        <EmptyItemsContainer>
          Selecciona una sede para ver los profesionales disponibles
        </EmptyItemsContainer>
      )}
      <FieldError name="professional"/>
    </div>
  );
}

function AlreadySelectedDisplay({serviceId, locationId, setProfessionalId}) {
  const professionals = useFetchProfessionals(serviceId, locationId);
  return professionals.length > 0 ? (
    <div className="flex flex-row flex-wrap gap-3">
      {professionals.map((professional) => (
        <ProfessionalCard
          key={professional.id}
          professional={professional}
          onClick={() => {
            setProfessionalId(professional.id);
          }}
        />
      ))}
    </div>
  ) : (
    <EmptyItemsContainer>
      No existen profesionales de este servicio en esta sede. Por favor,
      selecciona otras opciones
    </EmptyItemsContainer>
  );
}

function ProfessionalCard({professional, onClick}) {
  return (
    <label className="radio-card flex-col md:flex-row w-fit" onClick={onClick}>
      <Image
        src={professional.picture}
        nameForDefault="professional"
        alt="Profile Picture"
        className="object-cover object-center rounded-xl md:w-32"
      />
      <div>
        <span className="block font-semibold text-blue-700 text-lg max-w-80">
          {professional.name}
        </span>
        <span className="block max-w-80"> {professional.description} </span>
      </div>
      <div className="flex justify-end mb-2 flex-grow">
        <input
          type="radio"
          name="professional"
          value={professional.id}
          className="h-fit w-fit"
        />
      </div>
    </label>
  );
}
