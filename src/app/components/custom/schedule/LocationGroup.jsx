import { useEffect, useState } from "react";
import EmptyItemsContainer from "./EmptyItemsContainer";
import { useFetchLocations } from "/src/app/hooks/scheduleHooks";
import Image from "/src/app/components/custom/misc/Image";
import FieldError from "/src/app/components/custom/form/FieldError.jsx";
export default function LocationGroup({ serviceId, setLocationId }) {
  return (
    <div>
      <label className="schedule-label">Seleccione una sede:</label>
      {serviceId ? (
        <AlreadySelectedDisplay
          serviceId={serviceId}
          setLocationId={setLocationId}
        />
      ) : (
        <EmptyItemsContainer>
          Selecciona un servicio para ver las sedes disponibles
        </EmptyItemsContainer>
      )}
      <FieldError name="location" />
    </div>
  );
}

function AlreadySelectedDisplay({ serviceId, setLocationId }) {
  const locations = useFetchLocations(serviceId);
  return locations.length > 0 ? (
    <div className="flex flex-row flex-wrap gap-3">
      {locations.map((location) => (
        <LocationCard
          key={location.id}
          location={location}
          onClick={() => setLocationId(location.id)}
        />
      ))}
    </div>
  ) : (
    <EmptyItemsContainer>
      No existen sedes para ese servicio. Por favor, cambia de servicio
    </EmptyItemsContainer>
  );
}

function LocationCard({ location, onClick }) {
  return (
    <label className="radio-card flex-col md:flex-row w-fit" onClick={onClick}>
      <Image
        src={location.picture}
        nameForDefault="location"
        alt="Location"
        className="h-32 object-cover object-center rounded-xl"
      />
      <div>
        <span className="block font-semibold text-blue-700 text-lg uppercase">
          {location.name}
        </span>
        <span className="block">{location.address}</span>
        <span className="block font-light text-gray-600">{location.phone}</span>
      </div>
      <div className="flex justify-end mb-2 flex-grow">
        <input
          type="radio"
          name="location"
          value={location.id}
          className="h-fit w-fit"
        />
      </div>
    </label>
  );
}
